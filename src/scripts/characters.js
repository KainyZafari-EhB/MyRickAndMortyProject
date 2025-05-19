// Fetch en toont alle Rick and Morty karakters, klikken op een karakter toont meer info
let allCharacters = [];
window.allCharacters = allCharacters;

async function fetchAllCharacters() {
  let url = 'https://rickandmortyapi.com/api/character';
  let results = [];
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    results = results.concat(data.results);
    url = data.info.next;
  }
  return results;
}

async function renderCharacters(filters = {}) {
  try {
    if (!allCharacters.length) {
      allCharacters = await fetchAllCharacters();
      window.allCharacters = allCharacters;
    }

    // Filter de karakters
    let filtered = allCharacters.filter(c => {
      return (!filters.name || c.name.toLowerCase().includes(filters.name.toLowerCase()))
        && (!filters.status || c.status === filters.status)
        && (!filters.species || c.species === filters.species)
        && (!filters.gender || c.gender === filters.gender);
    });

    // opties voor dropdowns
    const statuses = [...new Set(allCharacters.map(c => c.status).filter(Boolean))];
    const species = [...new Set(allCharacters.map(c => c.species).filter(Boolean))];
    const genders = [...new Set(allCharacters.map(c => c.gender).filter(Boolean))];

    document.getElementById('app').innerHTML = `
      <button onclick="navigateTo('')" style="margin-bottom:1rem;">⬅ Back to Home</button>
      <h2>Characters</h2>
      <form id="filterForm" style="margin-bottom:1rem;display:flex;gap:1rem;flex-wrap:wrap;">
        <input type="text" name="name" placeholder="Name" value="${filters.name || ''}" />
        <select name="status">
          <option value="">Status</option>
          ${statuses.map(s => `<option value="${s}" ${filters.status === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        <select name="species">
          <option value="">Species</option>
          ${species.map(s => `<option value="${s}" ${filters.species === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        <select name="gender">
          <option value="">Gender</option>
          ${genders.map(g => `<option value="${g}" ${filters.gender === g ? 'selected' : ''}>${g}</option>`).join('')}
        </select>
        <button type="submit">Filter</button>
        <button type="button" id="resetFilter">Reset</button>
      </form>
      <div class="grid">
        ${filtered.map((c, i) => `
          <div class="character-card" onclick="showCharacterDetails(${allCharacters.indexOf(c)})" style="cursor:pointer;position:relative;">
            <button onclick="event.stopPropagation(); addFavorite('characters', ${i})" style="position:absolute;top:10px;right:10px;">⭐</button>
            <img src="${c.image || 'https://via.placeholder.com/150'}" alt="${c.name}" />
            <h4>${c.name}</h4>
            <p><strong>Status:</strong> ${c.status || 'Unknown'}</p>
            <p><strong>Species:</strong> ${c.species || 'Unknown'}</p>
            <p><strong>Gender:</strong> ${c.gender || 'Unknown'}</p>
          </div>
        `).join('')}
      </div>
    `;

    // Filter event
    document.getElementById('filterForm').onsubmit = function(e) {
      e.preventDefault();
      const form = e.target;
      renderCharacters({
        name: form.name.value,
        status: form.status.value,
        species: form.species.value,
        gender: form.gender.value
      });
    };
    document.getElementById('resetFilter').onclick = function() {
      renderCharacters({});
    };

  } catch (err) {
    document.getElementById('app').innerHTML = `<p>Error loading characters.</p>`;
    console.error(err);
  }
}

window.renderCharacters = renderCharacters;

// Toont alle details van een karakter
// en geeft de mogelijkheid om terug te gaan naar de lijst
window.showCharacterDetails = function(index) {
  const c = allCharacters[index];
  document.getElementById('app').innerHTML = `
    <button onclick="renderCharacters()" style="margin-bottom:1rem;">⬅ Back to list</button>
    <button onclick="addFavorite('characters', ${index})" style="margin-bottom:1rem;">Add to Favorites</button>
    <div class="character-details" style="max-width:400px;margin:auto;background:white;padding:2rem;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.2);color:#222;">
      <img src="${c.image || 'https://via.placeholder.com/200'}" alt="${c.name}" style="width:200px;border-radius:8px;display:block;margin:auto;" />
      <h2>${c.name}</h2>
      <p><strong>Status:</strong> ${c.status || 'Unknown'}</p>
      <p><strong>Species:</strong> ${c.species || 'Unknown'}</p>
      <p><strong>Type:</strong> ${c.type || 'Unknown'}</p>
      <p><strong>Gender:</strong> ${c.gender || 'Unknown'}</p>
      <p><strong>Origin:</strong> ${c.origin?.name || 'Unknown'}</p>
      <p><strong>Location:</strong> ${c.location?.name || 'Unknown'}</p>
      <p><strong>Episodes:</strong> ${c.episode ? c.episode.length : 0}</p>
    </div>
  `;
}

// Toont de karakter van de dag
// Dit is een random karakter dat elke dag veranderd
async function showCharacterOfTheDay() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const stored = JSON.parse(localStorage.getItem('characterOfTheDay') || '{}');

  if (stored.date === today && stored.character) {
    const character = stored.character;
    document.getElementById('POTD').innerHTML = `Character of the day: <strong>${character.name}</strong> <img src="${character.image || 'https://via.placeholder.com/40'}" alt="${character.name}" style="height:40px;vertical-align:middle;border-radius:50%;margin-left:8px;">`;
    return;
  }

  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    if (data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const character = data.results[randomIndex];
      document.getElementById('POTD').innerHTML = `Character of the day: <strong>${character.name}</strong> <img src="${character.image || 'https://via.placeholder.com/40'}" alt="${character.name}" style="height:40px;vertical-align:middle;border-radius:50%;margin-left:8px;">`;
      localStorage.setItem('characterOfTheDay', JSON.stringify({ date: today, character }));
    }
  } catch (err) {
    document.getElementById('POTD').innerHTML = 'Character of the day: Unknown';
    console.error(err);
  }
}

showCharacterOfTheDay();

// Observer API: Houd wijzigingen in het #app element bij
const targetNode = document.getElementById('app');
const config = { childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('De inhoud van #app is gewijzigd door een API-actie.');
    }
  }
};

const observer = new MutationObserver(callback);
if (targetNode) {
  observer.observe(targetNode, config);
}

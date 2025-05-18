// Fetch en toont alle Rick and Morty episodes, klikken op een episode toont meer info
let allEpisodes = [];
window.allEpisodes = allEpisodes;

async function fetchAllEpisodes() {
  let url = 'https://rickandmortyapi.com/api/episode';
  let results = [];
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    results = results.concat(data.results);
    url = data.info.next;
  }
  return results;
}

async function renderEpisodes() {
  try {
    allEpisodes = await fetchAllEpisodes();
    window.allEpisodes = allEpisodes;

    document.getElementById('app').innerHTML = `
      <button onclick="navigateTo('')" style="margin-bottom:1rem;">🏠 Home</button>
      <h2>Episodes</h2>
      <div class="grid">
        ${allEpisodes.map((e, i) => `
          <div class="episode-card" onclick="showEpisodeDetails(${i})" style="cursor:pointer;position:relative;">
            <button onclick="event.stopPropagation(); addFavorite('episodes', ${i})" title="Add to Favorites" style="position:absolute;top:10px;right:10px;z-index:2;background:#111;color:#fff;padding:0.3em 0.7em;font-size:1.1em;border-radius:50%;border:none;box-shadow:0 2px 8px rgba(0,0,0,0.15);cursor:pointer;">⭐</button>
            <h4>${e.episode}: ${e.name}</h4>
            <p><strong>Air date:</strong> ${e.air_date || 'Unknown'}</p>
            <p><strong>Characters:</strong> ${e.characters.length}</p>
          </div>
        `).join('')}
      </div>
    `;
  } catch (err) {
    document.getElementById('app').innerHTML = `<p>Error loading episodes.</p>`;
    console.error(err);
  }
}

window.renderEpisodes = renderEpisodes;

// Toont alle details van een episode
window.showEpisodeDetails = async function(index) {
  const e = allEpisodes[index];

  // Haal karakterdata op voor deze episode
  const characterData = await Promise.all(
    e.characters.map(url => fetch(url).then(res => res.json()))
  );

  document.getElementById('app').innerHTML = `
    <button onclick="renderEpisodes()" style="margin-bottom:1rem;">⬅ Back to list</button>
    <button onclick="addFavorite('episodes', ${index})" style="margin-bottom:1rem;">Add to Favorites</button>
    <button onclick="navigateTo('')" style="margin-bottom:1rem;">🏠 Home</button>
    <div class="episode-details" style="max-width:700px;margin:auto;background:white;padding:2rem;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.2);color:#222;">
      <h2>${e.episode}: ${e.name}</h2>
      <p><strong>Air date:</strong> ${e.air_date || 'Unknown'}</p>
      <p><strong>ID:</strong> ${e.id}</p>
      <p><strong>Created:</strong> ${e.created}</p>
      <p><strong>Characters in this episode:</strong> ${characterData.length}</p>
      <div class="grid">
        ${characterData.map(c => `
          <div class="character-card">
            <img src="${c.image}" alt="${c.name}" style="width:100px;border-radius:8px;" />
            <h4>${c.name}</h4>
            <p><strong>Status:</strong> ${c.status}</p>
            <p><strong>Species:</strong> ${c.species}</p>
            <p><strong>Type:</strong> ${c.type || 'Unknown'}</p>
            <p><strong>Gender:</strong> ${c.gender}</p>
            <p><strong>Origin:</strong> ${c.origin?.name || 'Unknown'}</p>
            <p><strong>Location:</strong> ${c.location?.name || 'Unknown'}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

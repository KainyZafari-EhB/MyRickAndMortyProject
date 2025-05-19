// Fetch en toont alle Rick and Morty locaties, klikken op een locatie toont meer info
let allLocations = [];
window.allLocations = allLocations;

async function fetchAllLocations() {
  let url = 'https://rickandmortyapi.com/api/location';
  let results = [];
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    results = results.concat(data.results);
    url = data.info.next;
  }
  return results;
}

async function renderLocations() {
  try {
    allLocations = await fetchAllLocations();
    window.allLocations = allLocations;

    document.getElementById('app').innerHTML = `
      <button onclick="navigateTo('')" style="margin-bottom:1rem;">⬅ Back to Home</button>
      <h2>Locations</h2>
      <div class="grid">
        ${allLocations.map((l, i) => `
          <div class="location-card" onclick="showLocationDetails(${i})" style="cursor:pointer;position:relative;">
            <button onclick="event.stopPropagation(); addFavorite('locations', ${i})" title="Add to Favorites" style="position:absolute;top:10px;right:10px;z-index:2;background:#111;color:#fff;padding:0.3em 0.7em;font-size:1.1em;border-radius:50%;border:none;box-shadow:0 2px 8px rgba(0,0,0,0.15);cursor:pointer;">⭐</button>
            <h4>${l.name}</h4>
            <p><strong>Type:</strong> ${l.type || 'Unknown'}</p>
            <p><strong>Dimension:</strong> ${l.dimension || 'Unknown'}</p>
            <p><strong>Residents:</strong> ${l.residents.length}</p>
          </div>
        `).join('')}
      </div>
    `;
  } catch (err) {
    document.getElementById('app').innerHTML = `<p>Error loading locations.</p>`;
    console.error(err);
  }
}

window.renderLocations = renderLocations;

// Toont alle details van een locatie
window.showLocationDetails = async function(index) {
  const l = allLocations[index];

  // Haal karakterdata op voor deze locatie
  const residentData = await Promise.all(
    l.residents.map(url => fetch(url).then(res => res.json()))
  );

  document.getElementById('app').innerHTML = `
    <button onclick="renderLocations()" style="margin-bottom:1rem;">⬅ Back to list</button>
    <button onclick="addFavorite('locations', ${index})" style="margin-bottom:1rem;">Add to Favorites</button>
    <button onclick="navigateTo('')" style="margin-bottom:1rem;">⬅ Back to Home</button>
    <div class="location-details" style="max-width:700px;margin:auto;background:white;padding:2rem;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.2);color:#222;">
      <h2>${l.name}</h2>
      <p><strong>Type:</strong> ${l.type || 'Unknown'}</p>
      <p><strong>Dimension:</strong> ${l.dimension || 'Unknown'}</p>
      <p><strong>ID:</strong> ${l.id}</p>
      <p><strong>Created:</strong> ${l.created}</p>
      <p><strong>Residents:</strong> ${residentData.length}</p>
      <div class="grid">
        ${residentData.map(c => `
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
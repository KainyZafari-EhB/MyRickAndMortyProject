function router() {
  const hash = window.location.hash.replace('#', '');

  if (hash === 'characters') {
    renderCharacters();
  } else if (hash === 'episodes') {
    renderEpisodes();
  } else if (hash === 'locations') {
    renderLocations();
  } else if (hash === 'favorites') {
    renderFavorites();
  } else {
    // Home view
    document.getElementById('app').innerHTML = `
      <div class="begroeting">
        <h1>Welcome to the Rick and Morty API Explorer!</h1>
        <h3>Explore the Multiverse using this website!</h3>
      </div>
      <div class="home-grid">
        <div class="home-card home-characters">
          <h3>👥 Characters</h3>
          <p><button onclick="navigateTo('characters')">Click Here</button> to view all known characters from Rick and Morty.</p>
        </div>
        <div class="home-card home-episodes">
          <h3>📚 Episodes</h3>
          <p><button onclick="navigateTo('episodes')">Click Here</button> to explore all episodes.</p>
        </div>
        <div class="home-card home-locations">
          <h3>🌎 Locations</h3>
          <p><button onclick="navigateTo('locations')">Click Here</button> to discover all locations.</p>
        </div>
      </div>
    `;
  }
}

// Add this function:
function renderFavorites() {
  const favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  document.getElementById('app').innerHTML = `
    <h2>⭐ Favorites</h2>
    <div>
      <h3>Characters</h3>
      <div class="grid">
        ${(favs.characters || []).map(c => `
          <div class="character-card">
            <img src="${c.image}" alt="${c.name}" />
            <h4>${c.name}</h4>
            <button onclick="removeFavorite('characters', ${c.id})">Remove</button>
          </div>
        `).join('') || '<p>No favorite characters yet.</p>'}
      </div>
      <h3>Episodes</h3>
      <div class="grid">
        ${(favs.episodes || []).map(e => `
          <div class="episode-card">
            <h4>${e.episode}: ${e.name}</h4>
            <button onclick="removeFavorite('episodes', ${e.id})">Remove</button>
          </div>
        `).join('') || '<p>No favorite episodes yet.</p>'}
      </div>
      <h3>Locations</h3>
      <div class="grid">
        ${(favs.locations || []).map(l => `
          <div class="location-card">
            <h4>${l.name}</h4>
            <button onclick="removeFavorite('locations', ${l.id})">Remove</button>
          </div>
        `).join('') || '<p>No favorite locations yet.</p>'}
      </div>
    </div>
  `;
}

window.renderFavorites = renderFavorites;

window.removeFavorite = function(type, id) {
  const favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  favs[type] = (favs[type] || []).filter(item => item.id !== id);
  localStorage.setItem('favorites', JSON.stringify(favs));
  renderFavorites();
};

window.addFavorite = function(type, index) {
  let favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  favs[type] = favs[type] || [];
  let item;
  if (type === 'characters') item = window.allCharacters[index];
  if (type === 'episodes') item = window.allEpisodes[index];
  if (type === 'locations') item = window.allLocations[index];
  if (!item) return;
  // Avoid duplicates
  if (!favs[type].some(f => f.id === item.id)) {
    favs[type].push(item);
    localStorage.setItem('favorites', JSON.stringify(favs));
    alert('Added to favorites!');
  } else {
    alert('Already in favorites!');
  }
};

// Navigatie helper
function navigateTo(route) {
  window.location.hash = route;
}

// Router initialiseren
window.addEventListener('hashchange', router);
window.navigateTo = navigateTo;

// Initieel laden
window.addEventListener('DOMContentLoaded', () => {
  router();
  if (typeof showCharacterOfTheDay === 'function') {
    showCharacterOfTheDay();
  }
});
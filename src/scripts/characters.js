//fix de api die characters ophaalt en moet displayen
async function renderCharacters() {
  await fetch('https://api.api-onepiece.com/v2/characters/en', {method: GET});
  .then(response => response.json)
  .then(response => data)

  const characters = await response.json();

  .catch(err => () {
    console.log(err)
  });

  return `
    <h2>Characters</h2>
    <div class="grid">
      ${characters.map(c => `
        <div>
          <img src="${c.image}" alt="${c.name}" />
          <h4>${c.name}</h4>
        </div>
      `).join('')}
    </div>
  `;
}

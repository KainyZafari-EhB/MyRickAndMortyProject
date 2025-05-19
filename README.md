# Rick and Morty API Explorer

**Dit is een schoolproject.**  
Deze webapplicatie is gemaakt als opdracht voor school en dient ter oefening van webdevelopment met JavaScript, HTML en CSS.

---

## Projectbeschrijving

Met deze webapp kun je alles ontdekken over de wereld van Rick and Morty. Je kunt personages, afleveringen en locaties bekijken, filteren en favorieten opslaan. De app gebruikt de [Rick and Morty API](https://rickandmortyapi.com/) en werkt volledig in je browser.

---

## Functionaliteiten

- Homepagina met navigatie naar alle onderdelen
- Overzicht en detailpagina's voor personages, afleveringen en locaties
- Filteren van personages op naam, status, soort en geslacht
- Toevoegen/verwijderen van favorieten (personages, afleveringen, locaties)
- Favorieten worden opgeslagen in localStorage
- Responsief ontwerp voor mobiel en desktop

---

## Gebruikte API's

- [Rick and Morty API](https://rickandmortyapi.com/)

---

## Checklist concepten gebruikt

**DOM manipulatie:**  
- Elementen selecteren  
  `document.getElementById('app')` (`src/scripts/main.js`, regel 8)
- Elementen manipuleren  
  `document.getElementById('app').innerHTML = ...` (`src/scripts/characters.js`, regel 31)
- Events aan elementen koppelen  
  `window.addEventListener('hashchange', router);` (`src/scripts/main.js`, regel 61)

**Modern JavaScript:**  
- Gebruik van constanten  
  `const response = await fetch(url);` (`src/scripts/characters.js`, regel 8)
- Template literals  
  `` `<h2>${c.name}</h2>` `` (`src/scripts/characters.js`, regel 54)
- Iteratie over arrays  
  `allCharacters.map((c, i) => ...)` (`src/scripts/characters.js`, regel 31)
- Array methodes  
  `.filter()` (`src/scripts/characters.js`, regel 18)
- Arrow functions  
  `c => c.name.toLowerCase().includes(...)` (`src/scripts/characters.js`, regel 18)
- Conditional (ternary) operator  
  `${c.status || 'Unknown'}` (`src/scripts/characters.js`, regel 57)
- Callback functions  
  `.map(url => fetch(url).then(res => res.json()))` (`src/scripts/episodes.js`, regel 41)
- Promises  
  `fetch(url).then(res => res.json())` (`src/scripts/episodes.js`, regel 41)
- Async & Await  
  `async function fetchAllCharacters() { ... }` (`src/scripts/characters.js`, regel 6)
- Observer API  
  `MutationObserver` houdt wijzigingen in het hoofdscherm bij (`src/scripts/main.js`, einde bestand)

**Data & API:**  
- Fetch om data op te halen  
  `fetch('https://rickandmortyapi.com/api/character')` (`src/scripts/characters.js`, regel 7)
- JSON manipuleren en weergeven  
  `const data = await response.json();` (`src/scripts/characters.js`, regel 9)

**Opslag & validatie:**  
- Formulier validatie  
  Filterformulier validatie (`src/scripts/characters.js`, regel 17)
- Gebruik van LocalStorage  
  `localStorage.getItem('favorites')` (`src/scripts/main.js`, regel 19)

**Styling & layout:**  
- Basis HTML layout (flexbox of CSS grid)  
  `<div class="grid">...</div>` (`src/scripts/characters.js`, regel 32)
- Basis CSS  
  Algemene styling (`src/style.css`)
- Gebruiksvriendelijke elementen (verwijderknoppen, icoontjes,...)  
  ⭐-knoppen (`src/scripts/characters.js`, regel 36)

**Tooling & structuur:**  
- Project is opgezet met Vite  
  Zie installatie-instructies hieronder
- Een correcte folderstructuur wordt aangehouden  
  Zie de mapstructuur onder "Projectstructuur"

---

## Installatiehandleiding

### Vereisten

- [Node.js](https://nodejs.org/) (voor het draaien van een lokale server, optioneel)
- Een moderne webbrowser (Chrome, Firefox, Edge, etc.)

### Installatie

1. **Kloon deze repository:**
   ```sh
   git clone https://github.com/yourusername/MijnAPIProjectOnePiece.git
   cd MijnAPIProjectOnePiece/src
   ```

2. **(Optioneel) Start een lokale server:**
   - Met Node.js geïnstalleerd, voer uit:
     ```sh
     npx serve .
     ```
   - Of gebruik de [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extensie in VS Code.

3. **Open `index.html` in je browser.**

---

## Projectstructuur

```
src/
  index.html
  style.css
  scripts/
    main.js
    characters.js
    episodes.js
    locations.js
    mangas.js
  images/
```

---

## Screenshots van de applicatie

![Screenshot of the home screen](/images/screenshots/image.png)
![Screenshot of characters screen](/images/screenshots/image2.png)
![Screenshot of a character card](/images/screenshots/image3.png)
![Screenshot of episodes screen](/images/screenshots/image4.png)
![Screenshot of a episode card](/images/screenshots/image5.png)
![Screenshot van het locations scherm](/images/screenshots/image6.png)
![Screenshot van een locations kaart](/images/screenshots/image7.png)
![Screenshot van favorieten scherm](/images/screenshots/image8.png)

---

## Credits & Bronvermelding

- [Rick and Morty API](https://rickandmortyapi.com/)
- [Google Fonts](https://fonts.google.com/) voor Montserrat en Bebas Neue
- [ChatGPT](https://chatgpt.com)
- [CoPilot](https://github.com/copilot)

---

## Gebruik van AI

![Chatlog AI](/images/AIScreenshots/image-1.png)
![ChatlogAI](/images/AIScreenshots/image-2.png)
![ChatlogAI](/images/AIScreenshots/image.png)
![Chatlog AI](/images/AIScreenshots/image3.png)
[Link naar ChatGPT Gesprek](https://chatgpt.com/share/682b06c3-7c00-800e-b7dd-ad17c4354df2)

## Licentie

Dit project is bedoeld voor educatieve doeleinden.

---

## Auteur

- [KainyZafari-EhB](https://github.com/KainyZafari-EhB)

---

## Problemen oplossen

- Als afbeeldingen niet verschijnen, controleer of je directe afbeeldings-URL’s gebruikt of je afbeeldingen in de juiste map hebt geplaatst.
- Als favorieten niet werken, zorg dat je browser localStorage toestaat en JavaScript is ingeschakeld.

---

Veel plezier met het verkennen van het multiversum!
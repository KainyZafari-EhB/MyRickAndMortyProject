# Rick and Morty API Explorer

**Let op: Dit is een schoolproject.**  
Deze webapplicatie is gemaakt als opdracht voor school en dient ter oefening van webdevelopment met JavaScript, HTML en CSS.

---

## Over dit project

Met deze webapp kun je alles ontdekken over de wereld van Rick and Morty. Je kunt personages, afleveringen en locaties bekijken, filteren en favorieten opslaan. De app gebruikt de [Rick and Morty API](https://rickandmortyapi.com/) en werkt volledig in je browser.

---

## Wat kun je met deze website?

Hieronder vind je een overzicht van de stappen en mogelijkheden van de website:

1. **Homepagina**
   - Je komt binnen op een overzichtelijke homepagina met knoppen naar de verschillende onderdelen van de site.

2. **Navigatie**
   - Bovenaan staat altijd een navigatiebalk waarmee je snel kunt wisselen tussen Home, Personages, Afleveringen, Locaties en Favorieten.

3. **Personages**
   - Bekijk een overzicht van alle Rick and Morty-personages.
   - Filter op naam, status, soort en geslacht.
   - Klik op een kaart om meer details te zien van een personage.
   - Voeg een personage toe aan je favorieten via de ⭐-knop.

4. **Afleveringen**
   - Bekijk een lijst van alle afleveringen.
   - Klik op een aflevering voor meer details, inclusief een lijst van alle personages in die aflevering.
   - Voeg een aflevering toe aan je favorieten via de ⭐-knop.

5. **Locaties**
   - Ontdek alle locaties uit de serie.
   - Klik op een locatie voor meer details, inclusief een overzicht van de bewoners.
   - Voeg een locatie toe aan je favorieten via de ⭐-knop.

6. **Favorieten**
   - Bekijk je favoriete personages, afleveringen en locaties op één pagina.
   - Verwijder favorieten eenvoudig met de "Remove"-knop.
   - Favorieten worden opgeslagen in de localStorage van je browser.

7. **Responsief ontwerp**
   - De website werkt goed op zowel desktop als mobiel.

---

## Aan de slag

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
    (je eigen afbeeldingen, indien gewenst)
```

---

## Gebruik

- Gebruik de navigatiebalk bovenaan om te wisselen tussen Home, Personages, Afleveringen, Locaties en Favorieten.
- Klik op een kaart om meer details te bekijken.
- Klik op de ⭐-knop op een kaart of in detailweergave om toe te voegen aan favorieten.
- Favorieten worden opgeslagen in de localStorage van je browser en zijn te beheren via de Favorieten-pagina.

---

## Aanpassen

- **Afbeeldingen:**  
  Plaats je eigen afbeeldingen in de map `src/images/` en verwijs ernaar in `style.css` voor aangepaste achtergronden.

- **Stijlen:**  
  Alle stijlen staan in `style.css`. Je kunt kleuren, lettertypes en het uiterlijk van de kaarten naar wens aanpassen.

---

## Afhankelijkheden

- [Rick and Morty API](https://rickandmortyapi.com/)
- Geen externe JS-afhankelijkheden; alleen vanilla JS, HTML en CSS.

---

## Credits

- [Rick and Morty API](https://rickandmortyapi.com/)
- [Unsplash](https://unsplash.com/) en [Wikimedia Commons](https://commons.wikimedia.org/) voor achtergrondafbeeldingen
- [Google Fonts](https://fonts.google.com/) voor Montserrat en Bebas Neue

---

## Licentie

Dit project is bedoeld voor educatieve doeleinden.  
Zie [LICENSE](LICENSE) indien aanwezig.

---

## Auteur

- [Jouw naam of GitHub-gebruikersnaam](https://github.com/yourusername)

---

## Screenshots

_Voeg hier screenshots van je app toe!_

---

## Problemen oplossen

- Als afbeeldingen niet verschijnen, controleer of je directe afbeeldings-URL’s gebruikt of je afbeeldingen in de juiste map hebt geplaatst.
- Als favorieten niet werken, zorg dat je browser localStorage toestaat en JavaScript is ingeschakeld.

---

Veel plezier met het verkennen van het multiversum!
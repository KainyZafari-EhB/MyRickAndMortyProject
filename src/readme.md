# Rick and Morty API Explorer

Een webapplicatie om Rick and Morty-personages, afleveringen en locaties te verkennen, met favorieten-functionaliteit.  
Gemaakt met vanilla JavaScript, HTML en CSS.

---

## Functies

- Blader door alle personages, afleveringen en locaties van de Rick and Morty API
- Filter en zoek personages op naam, status, soort en geslacht
- Bekijk gedetailleerde informatie per personage, aflevering en locatie
- Voeg personages, afleveringen en locaties toe aan je favorieten (opgeslagen in je browser)
- Responsieve, moderne kaart-gebaseerde interface
- Home-scherm met snelle navigatie

---

## Aan de slag

### Vereisten

- [Node.js](https://nodejs.org/) (voor het draaien van een lokale server, optioneel maar aanbevolen)
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
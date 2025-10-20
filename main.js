const adventCalendar = document.querySelector(".calendrier");

//Tableau de 24 cases
const cases = [
    {numéro: 1, texte: "", image:""},
    {numéro: 2, texte: "", image:""},
    {numéro: 3, texte: "", image:""},
    {numéro: 4, texte: "", image:""},
    {numéro: 5, texte: "", image:""},
    {numéro: 6, texte: "", image:""},
    {numéro: 7, texte: "", image:""},
    {numéro: 8, texte: "", image:""},
    {numéro: 9, texte: "", image:""},
    {numéro: 10, texte: "", image:""},
    {numéro: 11, texte: "", image:""},
    {numéro: 12, texte: "", image:""},
    {numéro: 13, texte: "", image:""},
    {numéro: 14, texte: "", image:""},
    {numéro: 15, texte: "", image:""},
    {numéro: 16, texte: "", image:""},
    {numéro: 17, texte: "", image:""},
    {numéro: 18, texte: "", image:""},
    {numéro: 19, texte: "", image:""},
    {numéro: 20, texte: "", image:""},
    {numéro: 21, texte: "", image:""},
    {numéro: 22, texte: "", image:""},
    {numéro: 23, texte: "", image:""},
    {numéro: 24, texte: "", image:""},
    {numéro: 25, texte: "", image:""},
]

//Création de la grille

for (const c of cases) {
    const card = document.createElement("div");
    card.classList.add("cases");

    //Face avant, (image)
    const front = document.createElement("div");
    front.classList.add("face", "front");
    front.innerHTML = `<img src="${c.image}" alt="Jour${c.numéro}">`; 

    //Face arrière, (texte)
    const back = document.createElement("div");
    back.classList.add("face", "back");
    back.innerHTML = `<p>${c.texte}</p>`;

    //Ajout des faces à la case
    card.appendChild(front);
    card.appendChild(back);

    //Animation au clic
    card.addEventListener("cliuck", () => {
        card.classList.toggle("flip");
    });

    //Ajout case au calendrier
    calendrier.appendChild(card);
}
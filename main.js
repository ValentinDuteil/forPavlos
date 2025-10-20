const adventCalendar = document.querySelector(".calendrier");

//Tableau de 24 cases
const cases = [
    {numero: 1, texte: "", image:""},
    {numero: 2, texte: "", image:""},
    {numero: 3, texte: "", image:""},
    {numero: 4, texte: "", image:""},
    {numero: 5, texte: "", image:""},
    {numero: 6, texte: "", image:""},
    {numero: 7, texte: "", image:""},
    {numero: 8, texte: "", image:""},
    {numero: 9, texte: "", image:""},
    {numero: 10, texte: "", image:""},
    {numero: 11, texte: "", image:""},
    {numero: 12, texte: "", image:""},
    {numero: 25, texte: "blabla", image:""},
    {numero: 13, texte: "", image:""},
    {numero: 14, texte: "", image:""},
    {numero: 15, texte: "", image:""},
    {numero: 16, texte: "", image:""},
    {numero: 17, texte: "", image:""},
    {numero: 18, texte: "", image:""},
    {numero: 19, texte: "", image:""},
    {numero: 20, texte: "", image:""},
    {numero: 21, texte: "", image:""},
    {numero: 22, texte: "", image:""},
    {numero: 23, texte: "", image:""},
    {numero: 24, texte: "", image:""},
]

//Création d'un dévérouillage en fonction de la date

//Verification de la date
function dateCheck (numeroCase) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();

    return month === 9 && day >= numeroCase;
}

//Création de la grille

for (const c of cases) {
    const card = document.createElement("div");
    card.classList.add("case");

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

    // Vérifier si la case est verrouillée
    if (!dateCheck(c.numero)) {
        card.classList.add("locked");
    }

    //Animation au clic si case déverrouillée
    card.addEventListener("click", () => {
        if (card.classList.contains("locked")) {
            alert (`🙂🖕Bien essayé Bibou, faudra attendre le ${c.numero} décembre !🖕🙂`)
            return;
        }
        card.classList.toggle("flip");
    });

    //Ajout case au calendrier
    adventCalendar.appendChild(card);
}

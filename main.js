const adventCalendar = document.querySelector(".calendrier");

//Tableau de 24 cases
const cases = [
    {numero: 1, texte: "", image:"/images/split/splitanimage-r1-c1.png"},
    {numero: 2, texte: "", image:"/images/split/splitanimage-r1-c2.png"},
    {numero: 3, texte: "", image:"/images/split/splitanimage-r1-c3.png"},
    {numero: 4, texte: "", image:"/images/split/splitanimage-r1-c4.png"},
    {numero: 5, texte: "", image:"/images/split/splitanimage-r1-c5.png"},
    {numero: 6, texte: "", image:"/images/split/splitanimage-r2-c1.png"},
    {numero: 7, texte: "", image:"/images/split/splitanimage-r2-c2.png"},
    {numero: 8, texte: "", image:"/images/split/splitanimage-r2-c3.png"},
    {numero: 9, texte: "", image:"/images/split/splitanimage-r2-c4.png"},
    {numero: 10, texte: "", image:"/images/split/splitanimage-r2-c5.png"},
    {numero: 11, texte: "", image:"/images/split/splitanimage-r3-c1.png"},
    {numero: 12, texte: "", image:"/images/split/splitanimage-r3-c2.png"},
    {numero: 25, texte: "blabla", image:""},
    {numero: 13, texte: "", image:"/images/split/splitanimage-r3-c4.png"},
    {numero: 14, texte: "", image:"/images/split/splitanimage-r3-c5.png"},
    {numero: 15, texte: "", image:"/images/split/splitanimage-r4-c1.png"},
    {numero: 16, texte: "", image:"/images/split/splitanimage-r4-c2.png"},
    {numero: 17, texte: "", image:"/images/split/splitanimage-r4-c3.png"},
    {numero: 18, texte: "", image:"/images/split/splitanimage-r4-c4.png"},
    {numero: 19, texte: "", image:"/images/split/splitanimage-r4-c5.png"},
    {numero: 20, texte: "", image:"/images/split/splitanimage-r5-c1.png"},
    {numero: 21, texte: "", image:"/images/split/splitanimage-r5-c2.png"},
    {numero: 22, texte: "", image:"/images/split/splitanimage-r5-c3.png"},
    {numero: 23, texte: "", image:"/images/split/splitanimage-r5-c4.png"},
    {numero: 24, texte: "", image:"/images/split/splitanimage-r5-c5.png"},
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
    front.innerHTML = `<img src="${c.image}" alt="Jour${c.numero}">`; 

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

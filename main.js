const adventCalendar = document.querySelector(".calendrier");

//Tableau de 24 cases
const cases = [
    {numero: 1, texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...", image:"./images/split/splitanimage-r1-c1.png"},
    {numero: 2, texte: "", image:"./images/split/splitanimage-r1-c2.png"},
    {numero: 3, texte: "...qui officia deserunt mollit anim id est laborum", image:"./images/split/splitanimage-r1-c3.png"},
    {numero: 4, texte: "Excepteur sint occaecat cupidatat non proident, sunt", image:"./images/split/splitanimage-r1-c4.png"},
    {numero: 5, texte: "Ut enim ad minim...", image:"./images/split/splitanimage-r1-c5.png"},
    {numero: 6, texte: "", image:"./images/split/splitanimage-r2-c1.png"},
    {numero: 7, texte: "", image:"./images/split/splitanimage-r2-c2.png"},
    {numero: 8, texte: "... exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image:"./images/split/splitanimage-r2-c3.png"},
    {numero: 9, texte: "", image:"./images/split/splitanimage-r2-c4.png"},
    {numero: 10, texte: "", image:"./images/split/splitanimage-r2-c5.png"},
    {numero: 11, texte: "", image:"./images/split/splitanimage-r3-c1.png"},
    {numero: 12, texte: "", image:"./images/split/splitanimage-r3-c2.png"},
    {numero: 25, texte: "blabla", image:"./images/us.jpg"},
    {numero: 13, texte: "", image:"./images/split/splitanimage-r3-c4.png"},
    {numero: 14, texte: "...totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...", image:"./images/split/splitanimage-r3-c5.png"},
    {numero: 15, texte: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...", image:"./images/split/splitanimage-r4-c1.png"},
    {numero: 16, texte: "", image:"./images/split/splitanimage-r4-c2.png"},
    {numero: 17, texte: "Ut enim ad minima veniam, quis nostrum...", image:"./images/split/splitanimage-r4-c3.png"},
    {numero: 18, texte: "", image:"./images/split/splitanimage-r4-c4.png"},
    {numero: 19, texte: "...molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", image:"./images/split/splitanimage-r4-c5.png"},
    {numero: 20, texte: "", image:"./images/split/splitanimage-r5-c1.png"},
    {numero: 21, texte: "", image:"./images/split/splitanimage-r5-c2.png"},
    {numero: 22, texte: "...ex ea commodo consequat.", image:"./images/split/splitanimage-r5-c3.png"},
    {numero: 23, texte: "", image:"./images/split/splitanimage-r5-c4.png"},
    {numero: 24, texte: "", image:"./images/split/splitanimage-r5-c5.png"},
]

//Fonction qui permet de mélanger le tableau(merci IA pour Fisher-Yates shuffle algorythm)
function shuffle(array) {
    const copie = [...array];
    for (let i = copie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copie[i], copie[j]] = [copie[j], copie[i]];
    }
    return copie;
}
    //Séparer les données : images qui doivent rester fixes VS textes+numéros
    const fixedImages = cases.map(c => c.image);

    //Créer le couple textes+numéros en excluant le 25
    const Data25 = cases.find(c => c.numero === 25);
    const otherDatas = cases.filter(c => c.numero !== 25).map(c => ({numero: c.numero, texte: c.texte}));

    //Mélanger les données (textes+numéros)
    const shuffledDatas = shuffle(otherDatas);

    //Réinsérrer la 25 toujours au centre
    shuffledDatas.splice(12, 0, {numero: Data25.numero, texte: Data25.texte});

//Création d'un dévérouillage en fonction de la date (class locked ajouté lors de la création de la grille)

//Verification de la date
function dateCheck (numeroCase) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();

    return month === 10 && day >= numeroCase;
}

//Création de la grille

shuffledDatas.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("case");

    //Face avant, (image)
    const front = document.createElement("div");
    front.classList.add("face", "front");
    front.innerHTML =`
        <img src="${fixedImages[index]}" alt="Jour${data.numero}">
        <span class="numero">${data.numero}</span>
        `; 

    //Face arrière, (texte)
    const back = document.createElement("div");
    back.classList.add("face", "back");
    back.innerHTML = `<p>${data.texte}</p>`;

    //Ajout des faces à la case
    card.appendChild(front);
    card.appendChild(back);

    // Vérifier si la case est verrouillée
    if (!dateCheck(data.numero)) {
        card.classList.add("locked");
    }
    if (data.numero === 25) {
        card.classList.add("case-25")
    }
    //Animation au clic si case déverrouillée
    card.addEventListener("click", () => {
        if (card.classList.contains("locked")) {
            alert (`🙂🖕Bien essayé Bibou, faudra attendre le ${data.numero} décembre !🖕🙂`)
            return;
        }
        card.classList.toggle("flip");
    });

    //Ajout case au calendrier
    adventCalendar.appendChild(card);
});

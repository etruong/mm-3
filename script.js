let aliens = [
    {
        name: "Bee",
        type: "Sky Cypher",
        age: "12 months",
        like: "Flying and smelling flowers",
        photo: "img/bee.jpg"
    },
    {
        name: "Carrot",
        type: "EarthDweller",
        age: "15 months",
        like: "Stuffed animals and carrots",
        photo: "img/carrot.jpg"
    },
    {
        name: "Flurry",
        type: "Snowsnob",
        age: "2 yo",
        like: "Ice cream cones and sweets",
        photo: "img/flurry.jpeg"
    },
    {
        name: "Neutro",
        type: "EarthDweller",
        age: "1 month",
        like: "Chemistry and building",
        photo: "img/neutro.jpeg"
    },
    {
        name: "Munch",
        type: "Swampy",
        age: "1 month",
        like: "Eating Everything.",
        photo: "img/munch.jpeg"
    }
];

generateCards();

function createCard(info) {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("div");
    img.innerHTML = "&nbsp;";
    img.style.backgroundImage = "url(\"" + info.photo + "\")";
    card.appendChild(img);
    card.innerHTML += 
        "<h2>" + info.name + "</h2>" +
        "<ul>" +
            "<li><span>Type:</span> " + info.type + "</li>" +
            "<li><span>Age:</span> " + info.age + "</li>" +
            "<li><span>Likes:</span> " + info.like + "</li>" +
        "</ul>" +
        "<button>Adopt</button>";
    return card;
}

function generateCards() {
    const container = document.getElementById("card-container");
    for (let i = 0; i < aliens.length; i++) {
        let card = createCard(aliens[i]);
        container.appendChild(card);
    }
}

function generateStars() {
    
}
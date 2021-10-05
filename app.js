// Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

// Link text
playerLivesCount.textContent = playerLives;

//Generated data for cards
const getData = () => [
  { imgSrc: "./images/card1.jpg", id: 1, name: "card 1" },
  { imgSrc: "./images/card2.jpg", id: 2, name: "card 2" },
  { imgSrc: "./images/card3.jpg", id: 3, name: "card 3" },
  { imgSrc: "./images/card4.jpg", id: 4, name: "card 4 " },
  { imgSrc: "./images/card5.jpg", id: 5, name: "card 5" },
  { imgSrc: "./images/card6.jpg", id: 6, name: "card 6" },
  { imgSrc: "./images/card7.jpg", id: 7, name: "card 7" },
  { imgSrc: "./images/card8.jpg", id: 8, name: "card 8" },
  { imgSrc: "./images/card1.jpg", id: 9, name: "card 1" },
  { imgSrc: "./images/card2.jpg", id: 10, name: "card 2" },
  { imgSrc: "./images/card3.jpg", id: 11, name: "card 3" },
  { imgSrc: "./images/card4.jpg", id: 12, name: "card 4 " },
  { imgSrc: "./images/card5.jpg", id: 13, name: "card 5" },
  { imgSrc: "./images/card6.jpg", id: 14, name: "card 6" },
  { imgSrc: "./images/card7.jpg", id: 15, name: "card 7" },
  { imgSrc: "./images/card8.jpg", id: 16, name: "card 8" },
];

// Randomize cards
const randomize = () => {
//Grabs cards from data function with stored array of cards.
  const cardData = getData();
//Sort function retrieves array and with Math.random(), it shuffles array.
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// Card Generator Function
const cardGenerator = () =>{
  const cardData = randomize();

  // Generate 16 card html
  cardData.forEach((item) => {
  const card = document.createElement("div");
  const face = document.createElement('img');
  const back = document.createElement("div");
  
  card.classList = "card";
  face.classList = "face";
  back.classList = "back";

  // Attach information to card
  face.src = item.imgSrc;

  // Attach cards to the sections
  section.appendChild(card);
  card.appendChild(face);
  card.appendChild(back);
  });
};

cardGenerator();

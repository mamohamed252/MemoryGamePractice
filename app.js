// Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 7;

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
const cardGenerator = () => {
  const cardData = randomize();

  // Generate 16 card html
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    // Attach information to card
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // Attach cards to the sections
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    /* Add event listener */
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    })
  });
};

// Check if cards match
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  // Card flip logic
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  console.log(flippedCards);
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        //setting bufferzone from instant logic reversed flip when wrong
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      // players lives stops at 0 to avoid negative numbers
      if (playerLives === 0) {
        restart("Try agin");
      }
    }
  }
  // Run check to see if you won
  if(toggleCard.length === 16){
    restart("you won");
  }
};

// Restart counter
const restart = (text) => {

  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");

    // Randomize cards and update when lost
    cards[index].style.pointerEvents = "all";
    //Updating here
    //SetTimeout here allows cards to reload at settime before
    // Allowing user to play new game.
    setTimeout(() =>{
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  // if we lose game loop over each card and remove 
  //classlist togglecard which will reflip cards
  // back to player live counter default
  playerLives = 7;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();

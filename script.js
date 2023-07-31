const slidesContainer = document.querySelector(".carousel .flex #slider");
const cards = document.querySelectorAll(".card");
const cardWidth = document.querySelector(".card").clientWidth;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentCard = 0;

nextButton.addEventListener("click", (event) => {
  if (currentCard < cards.length - 1) {
    currentCard += 1;
  } else {
    currentCard = 0;
  }

  slidesContainer.scrollLeft = cardWidth * currentCard;
});

prevButton.addEventListener("click", (event) => {
  if (currentCard > 0) {
    currentCard -= 1;
  } else {
    currentCard = cards.length - 1;
  }

  slidesContainer.scrollLeft = cardWidth * currentCard;
});

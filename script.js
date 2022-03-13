'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const cardsList = [
    {
      name: 'apple',
      image: 'img/apple.jpg',
    },
    {
      name: 'apple',
      image: 'img/apple.jpg',
    },
    {
      name: 'kruska',
      image: 'img/kruska.jpg',
    },
    {
      name: 'kruska',
      image: 'img/kruska.jpg',
    },
    {
      name: 'maline',
      image: 'img/maline.png',
    },
    {
      name: 'maline',
      image: 'img/maline.png',
    },
    {
      name: 'mandarin',
      image: 'img/mandarin.jpg',
    },
    {
      name: 'mandarin',
      image: 'img/mandarin.jpg',
    },
    {
      name: 'orange',
      image: 'img/orange.jpg',
    },
    {
      name: 'orange',
      image: 'img/orange.jpg',
    },
    {
      name: 'pineapple',
      image: 'img/pineapple.webp',
    },
    {
      name: 'pineapple',
      image: 'img/pineapple.webp',
    },
  ];

  const container = document.querySelector('.game-container2');
  const attemptsHolder = document.querySelector('.attemptsHolder');
  const foundHolder = document.querySelector('.foundHolder');
  const button = document.querySelector('.button');
  const cardsInGame = 6;

  // assigning varibale for attempts and foundCards to 0;
  let attempts = 0;
  let foundCards = 0;

  // Adding values of attempts and foundCards via textContent
  attemptsHolder.textContent = attempts;
  foundHolder.textContent = foundCards;

  // Storing name of the chosen card into this array
  let chosenCards = [];
  // Storing id of the chosen card into this array
  let chosenCardIds = [];

  // Displaying cards on random places using sort method
  cardsList.sort(() => 0.5 - Math.random());

  // Load board on our page and display everything (flipped)
  const initiateBoard = function () {
    // Iteration through cardList array
    for (let i = 0; i < cardsList.length; i++) {
      // For each iteration create one card = img(element)
      const card = document.createElement('img');
      // For each card set attribute of source to be equal to placeholder = blue card
      card.setAttribute('src', 'img/placeholder.jpg');
      // For each card set data-id in order (0, 1, 2, 3, 4)... as they create
      card.setAttribute('data-id', i);
      // Adding class to images so i can display 150x150px
      card.classList = 'imgs';
      // Listen for click events on our cards and add flipCard function, if clicked
      card.addEventListener('click', flipCard);
      // Add or append every card to our container
      container.appendChild(card);
    }
  };

  // Fliping the card functionality
  const flipCard = function () {
    // If our chosenCards array is not equal to 2
    if (chosenCards.length != 2) {
      // On click we create cardId variable, with data-id (number 0, 1, 2, 3...)Attributes of clicked card
      let cardId = this.getAttribute('data-id');
      // if card source is not equal to bank space we can keep adding // pushing into arrays
      if (this.getAttribute('src') != 'img/blank.png') {
        // Into cardList array search for card with id of clicked card (cardId), take name of that card, and push it in chosenCards array
        chosenCards.push(cardsList[cardId].name);
        // Push id of clicked card (cardId) into chosenCardIds
        chosenCardIds.push(cardId);
        // Set source of clicked card equal to that card id.image, taking that from array
        this.setAttribute('src', cardsList[cardId].image);
        // if chosenCards array has 2 images or names set Timeout function
        if (chosenCards.length == 2) {
          // Timeout function that will check for match in next function, and after that flip the cards in 0.4s
          setTimeout(checkForMatch, 400);
        }
      }
    }
  };

  const checkForMatch = function () {
    // If 2 cards are flipped add to attempts +1
    attempts++;
    // Selectin all images
    let cards = document.querySelectorAll('img');
    // First card is equal to our chosen card ids at position 0
    let firstCard = chosenCardIds[0];
    // Second card is equal to our chosen card ids at position 1
    let secondCard = chosenCardIds[1];

    // if first chosen card name(jabuka) == second chosen card name(jabuka)
    if (chosenCards[0] == chosenCards[1]) {
      // Select card (image) at position firstCard and add source of blank space, same for second card
      cards[firstCard].setAttribute('src', 'img/blank.png');
      cards[secondCard].setAttribute('src', 'img/blank.png');
      // When they are found add found counter +1
      foundCards++;
    } else {
      // If first chosen card name(jabuka) != second chosen card name(kruska) set back to blue images (placeholders)
      cards[firstCard].setAttribute('src', 'img/placeholder.jpg');
      cards[secondCard].setAttribute('src', 'img/placeholder.jpg');
    }
    // After every check of 2 cards chosenCards array and chosenCardIds array is set to 0
    chosenCards = [];
    chosenCardIds = [];

    // Update attempts and foundCards scores
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    // Checking if every card is found
    if (foundCards == cardsInGame) {
      alert('Well Done!! You won!!');
    }
  };

  // Set everything back to start position
  const restartGame = function () {
    cardsList.sort(() => 0.5 - Math.random());

    const allCards = document.querySelectorAll('img');
    allCards.forEach(card => {
      card.setAttribute('src', 'img/placeholder.jpg');
    });

    attempts = 0;
    foundCards = 0;

    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    chosenCards = [];
    chosenCardIds = [];
  };

  button.addEventListener('click', restartGame);

  initiateBoard();
});

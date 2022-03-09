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

  let attempts = 0;
  let foundCards = 0;

  attemptsHolder.textContent = attempts;
  foundHolder.textContent = foundCards;

  let chosenCards = [];
  let chosenCardIds = [];

  cardsList.sort(() => 0.5 - Math.random());

  const initiateBoard = function () {
    for (let i = 0; i < cardsList.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'img/placeholder.jpg');
      card.setAttribute('data-id', i);
      card.classList = 'imgs';
      card.addEventListener('click', flipCard);
      container.appendChild(card);
    }
  };
  const flipCard = function () {
    if (chosenCards.length != 2) {
      let cardId = this.getAttribute('data-id');
      if (this.getAttribute('src') != 'img/blank.png') {
        chosenCards.push(cardsList[cardId].name);
        chosenCardIds.push(cardId);
        this.setAttribute('src', cardsList[cardId].image);
        if (chosenCards.length == 2) {
          setTimeout(checkForMatch, 400);
        }
      }
    }
  };

  const checkForMatch = function () {
    attempts++;
    let cards = document.querySelectorAll('img');
    let firstCard = chosenCardIds[0];
    let secondCard = chosenCardIds[1];

    if (chosenCards[0] == chosenCards[1]) {
      cards[firstCard].setAttribute('src', 'img/blank.png');
      cards[secondCard].setAttribute('src', 'img/blank.png');
      foundCards++;
    } else {
      cards[firstCard].setAttribute('src', 'img/placeholder.jpg');
      cards[secondCard].setAttribute('src', 'img/placeholder.jpg');
    }

    chosenCards = [];
    chosenCardIds = [];

    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    if (foundCards == cardsInGame) {
      alert('Well Done!! You won!!');
    }
  };

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

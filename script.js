'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.game-container2');
  let clickCount = 0;
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

  cardsList.forEach(function (card) {
    const images = document.createElement('img');
    images.classList = 'imgs';
    images.src = 'img/front.jpg';
    container.appendChild(images);

    images.addEventListener('click', function (e) {
      e.preventDefault();
      let clicked = e.target;
      const attemptsHolder = document.querySelector('.attemptsHolder');
      const foundHolder = document.querySelector('.foundHolder');
      images.src = card.image;

      let clickedCardName = card.name;
    });
  });
});

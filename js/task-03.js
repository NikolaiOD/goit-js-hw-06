// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// =====First variant====

const listElement = document.querySelector('.gallery');

const makeGalleryOfImages = images
  .map(({ url, alt }) => `<li><img src = '${url}' alt = '${alt}' width="320"></li>`)
  .join('');

listElement.insertAdjacentHTML('beforeend', makeGalleryOfImages);

listElement.style.display = 'flex';
listElement.style.flexDirection = 'column';
listElement.style.alignItems = 'center';
listElement.style.gap = '20px';
listElement.style.listStyle = 'none';

// =====Second variant====

// const listElement = document.querySelector('.gallery');

// images.forEach(({url, alt}) => {
//   const makeGalleryOfImages = `<li><img src = '${url}' alt = '${alt}' width="320"></li>`
//   listElement.insertAdjacentHTML('beforeend', makeGalleryOfImages);
// })

// listElement.style.display = 'flex';
// listElement.style.flexDirection = 'column';
// listElement.style.alignItems = 'center';
// listElement.style.gap = '20px';
// listElement.style.listStyle = 'none';

// =====Third variant====

// const listElement = document.querySelector('.gallery');

// const makeGalleryOfImages = images => {
//   return images.map(image => {
//     return listElement.insertAdjacentHTML(
//       'beforeend',
//       `<li><img src = '${image.url}' alt = '${image.alt}' width="320"></li>`
//     );
//   });
// };

// makeGalleryOfImages(images);

// listElement.style.display = 'flex';
// listElement.style.flexDirection = 'column';
// listElement.style.alignItems = 'center';
// listElement.style.gap = '20px';
// listElement.style.listStyle = 'none';

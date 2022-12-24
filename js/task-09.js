// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

button.addEventListener('click', onButtonChangeBackgroundColor);

function onButtonChangeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}

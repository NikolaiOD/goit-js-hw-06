// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// =====First variant====

const listElement = document.querySelector('#ingredients');

const makeItemOfIngredients = ingredients
  .map((ingridient) => {
    const itemElement = document.createElement('li');
    itemElement.textContent = ingridient;
    itemElement.classList.add('item');

    return itemElement;
  });

listElement.append(...makeItemOfIngredients);

// =====Second variant====

// const listElement = document.querySelector('#ingredients');

// const makeItemOfIngredients = ingredients => {
//   return ingredients.map(ingridient => {
//     const itemElement = document.createElement('li');
//     itemElement.textContent = ingridient;
//     itemElement.classList.add('item');

//     return itemElement;
//   });
// };

// const elements = makeItemOfIngredients(ingredients);
// listElement.append(...elements);
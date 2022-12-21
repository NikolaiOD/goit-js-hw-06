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

const ulElement = document.querySelector('#ingredients');

const makeListOfIngredients = ingredients => {
  return ingredients.map(ingridient => {
    const liElement = document.createElement('li');
    liElement.textContent = ingridient;
    liElement.classList.add('item');

    return liElement;
  });
};

const elements = makeListOfIngredients(ingredients);
ulElement.append(...elements);

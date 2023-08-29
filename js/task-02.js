const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newEl = ingredients.map(element => {
  let ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add('item');
  return ingredient;
});
const newIngredients = document.querySelector('ul');
newIngredients.append(...newEl);

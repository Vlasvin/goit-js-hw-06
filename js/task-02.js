const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add('item');
  const newIngredients = document.querySelector('ul');
  newIngredients.appendChild(ingredient);
});

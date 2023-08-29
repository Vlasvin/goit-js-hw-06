const categories = document.querySelectorAll('li.item');
console.log(`Number of categories:`, categories.length);
categories.forEach(element => {
  const category = element.firstElementChild;
  const elements = element.children[1].children.length;
  console.log(`Category:`, category.textContent);
  console.log(`Elements:`, elements);
});

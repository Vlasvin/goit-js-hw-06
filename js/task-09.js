function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorName = document.querySelector('.color');
const currentColor = document.querySelector('body');
const button = document.querySelector('button');
button.addEventListener('click', changeBackColor);
function changeBackColor() {
  const randomColor = getRandomHexColor();
  currentColor.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}

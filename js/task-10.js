const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let boxEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', clearBoxes);

function createBoxes() {
  const defaultSize = 30;
  let currentNumber = parseInt(inputNumber.value, 10);
  for (let i = 0; i < currentNumber; i++) {
    const newSize = defaultSize + i * 10;
    const newDiv = document.createElement('div');
    newDiv.style.width = `${newSize}px`;
    newDiv.style.height = `${newSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxEl.appendChild(newDiv);
  }
}
function clearBoxes() {
  boxEl.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

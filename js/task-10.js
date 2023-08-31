const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let boxEl = document.querySelector('#boxes');
const minNum = inputNumber.min;
const maxNum = inputNumber.max;
const stepNum = +inputNumber.step;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', clearBoxes);

function createBoxes() {
  const defaultSize = 30;
  let currentNumber = parseInt(inputNumber.value, 10);
  if (currentNumber < minNum || currentNumber > maxNum) {
    alert('Значення по за межами дозволеного (1-100)');
  } else {
    for (let i = 0; i < currentNumber; i += stepNum) {
      const newSize = defaultSize + i * 10;
      const newDiv = document.createElement('div');
      newDiv.style.width = `${newSize}px`;
      newDiv.style.height = `${newSize}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      boxEl.appendChild(newDiv);
    }
  }
}
function clearBoxes() {
  boxEl.innerHTML = '';
  inputNumber.value = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

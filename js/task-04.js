let counterValue = 0;
const valueEl = document.querySelector('#value');
const buttons = document.querySelectorAll('button');
buttons[0].addEventListener('click', decrementValue);
buttons[1].addEventListener('click', incrementValue);
function incrementValue() {
  valueEl.textContent = `${(counterValue += 1)}`;
}
function decrementValue() {
  valueEl.textContent = `${(counterValue -= 1)}`;
}

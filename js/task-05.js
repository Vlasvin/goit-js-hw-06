const nameEl = document.querySelector('#name-input');
const msgEl = document.querySelector('#name-output');

nameEl.addEventListener('input', onInput);
function onInput(event) {
  event.currentTarget.value !== ''
    ? (msgEl.textContent = event.currentTarget.value)
    : (msgEl.textContent = 'Anonymous');
}

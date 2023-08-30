const nameEl = document.querySelector('#name-input');
const msgEl = document.querySelector('#name-output');

nameEl.addEventListener('input', onInput);
function onInput(event) {
  event.currentTarget.value.trim() !== ''
    ? (msgEl.textContent = event.currentTarget.value.trim())
    : (msgEl.textContent = 'Anonymous');
}

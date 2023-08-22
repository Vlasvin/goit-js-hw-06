const inputEl = document.querySelector('input');
const lengthEl = parseInt(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length !== lengthEl
    ? inputEl.classList.add('invalid')
    : inputEl.classList.add('valid');
}

const inputEl = document.querySelector('input');
const lengthEl = parseInt(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== lengthEl) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else inputEl.classList.remove('invalid');
  inputEl.classList.add('valid');
}

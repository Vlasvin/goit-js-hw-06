const inputEl = document.querySelector('input');
const lengthEl = +inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.trim().length !== lengthEl) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}

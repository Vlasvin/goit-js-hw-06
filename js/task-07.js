const sizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
sizeEl.addEventListener('input', inputSize);
function inputSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

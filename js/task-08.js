const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const formData = new FormData(event.currentTarget);
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  if ((elements.email.value && elements.password.value) === '') {
    window.alert('Всі поля повинні бути заповнені');
    return;
  }
  console.log(userData);
  form.reset();
}

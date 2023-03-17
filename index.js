const uName = document.getElementById('fullname');
const uEmail = document.getElementById('email_address');
const text = document.getElementById('text_message');
const pForm = document.getElementById('form');

pForm.addEventListener('change', () => {
  const data = {
    username: uName.value,
    useremail: uEmail.value,
    message: text.value,
  };
  const userDataSerialized = JSON.stringify(data);
  localStorage.setItem('data', userDataSerialized);
});

window.addEventListener('load', () => {
  const userDataSerData = JSON.parse(localStorage.data);
  uName.value = userDataSerData.username;
  uEmail.value = userDataSerData.useremail;
  text.value = userDataSerData.message;
});
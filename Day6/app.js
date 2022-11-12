const alert = document.querySelector('.alert');
const back = document.querySelector('.back');
const box = document.querySelector('.box');

const eKey = document.querySelector('.card.key p:last-child');
const eLocation = document.querySelector('.card.location p:last-child');
const eWhich = document.querySelector('.card.which p:last-child');
const eCode = document.querySelector('.card.code p:last-child');

document.addEventListener('keypress', (e) => {
  alert.classList.add('hide');
  box.classList.remove('hide');
  let keyName = e.keyCode === 32 ? 'Sapce' : e.key;
  document.querySelector('.result').innerText = e.which;
  eKey.innerHTML = keyName;
  eLocation.innerHTML = e.location;
  eWhich.innerHTML = e.which;
  eCode.innerHTML = e.code;
});

back.addEventListener('click', () => {
  setTimeout(() => {
    alert.classList.remove('hide');
    box.classList.add('hide');
  }, 20);
});

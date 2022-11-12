var openModalButton = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var closeModalButton = document.querySelector('.modal__footer button');
var closeIcon = document.querySelector('.modal__header i');

function toggleModal() {
  modal.classList.toggle('hide');
}

if (openModalButton) {
  openModalButton.addEventListener('click', toggleModal, false);
}
if (closeModalButton) {
  closeModalButton.addEventListener('click', toggleModal);
}
if (closeIcon) {
  closeIcon.addEventListener('click', toggleModal);
}
modal.addEventListener('click', (e) => {
  if (e.target == e.currentTarget) toggleModal();
});

const images = document.querySelectorAll('.wrapper .image img');
const gallery = document.querySelector('.gallery');
const galleryImg = document.querySelector('.gallery__inner img');
const close = document.querySelector('.gallery .close');
const next = document.querySelector('.control.next');
const prev = document.querySelector('.control.prev');
const imgIndex = document.querySelector('.gallery__inner .gallery-img__index');
const imgName = document.querySelector('.gallery__inner .gallery-img__name');

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    console.log(currentIndex);
    showGallery();
  });
});

function showGallery() {
  currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide');
  currentIndex == images.length - 1 ? next.classList.add('hide') : next.classList.remove('hide');
  gallery.classList.add('show');
  galleryImg.src = images[currentIndex].src;
  imgName.innerHTML = `${galleryImg.getAttribute('src').split('/').reverse()[0]}`;
  imgIndex.innerHTML = `${currentIndex} of ${images.length - 1}`;
}

close.addEventListener('click', () => {
  gallery.classList.remove('show');
});

next.addEventListener('click', () => {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  console.log(currentIndex);
  showGallery();
});
prev.addEventListener('click', () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  console.log(currentIndex);
  showGallery();
});

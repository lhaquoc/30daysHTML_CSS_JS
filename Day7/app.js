const ul = document.querySelector('ul'),
  input = document.querySelector('input'),
  removeBtn = document.querySelector('.btn-removeAll');

let tags = ['sample tag', 'ruby', 'python'];

createTag();

function createTag() {
  ul.querySelectorAll('li').forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `
            <li>${tag}
            <i class="fas fa-times close" onclick="removeTag(this, '${tag}')"></i>
            </li>
            `;
      ul.insertAdjacentHTML('afterbegin', liTag);
    });
  input.focus();
}

function removeTag(element, tag) {
  let index = tags.indexOf(tag);
  tags.splice(index, 1);
  element.parentElement.remove();
  input.focus();
}

input.addEventListener('keyup', addTag);

function addTag(event) {
  if (event.key == 'Enter') {
    let tag = event.target.value.trim();
    if (tag != '' && !tags.includes(tag)) {
      tags.push(tag);
      createTag();
    }
    event.target.value = '';
  }
}

removeBtn.addEventListener('click', () => {
  tags.length = 0;
  ul.querySelectorAll('li').forEach((li) => {
    li.remove();
  });
  input.focus();
});

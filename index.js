
const listItem = document.getElementById('list');
const menu = document.getElementById('menu');


menu.addEventListener('click', () => {
    listItem.classList.toggle('active');
})
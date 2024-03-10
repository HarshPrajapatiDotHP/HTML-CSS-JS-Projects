let bars = document.getElementById('bars');
let cross = document.getElementById('cross');
let menu = document.getElementById('menu');
let listItems = document.getElementsByClassName('list-items');
let drop = document.getElementById('drop_1');
let productList = document.getElementsByClassName('product-list')[0];

const listRemove = () => {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.toggle('hidden');
    }
}

bars.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    menu.classList.toggle('menu');
    menu.classList.toggle('nav-right');
});

cross.addEventListener('click', () => {

    bars.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    menu.classList.toggle('menu');
    menu.classList.toggle('nav-right');
});

drop.addEventListener('click', () => {
    productList.classList.toggle('hidden');
    listRemove();
});
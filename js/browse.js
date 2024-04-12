let openShoppin = document.querySelector('.shoppin');
let closeShoppin = document.querySelector('.closeShoppin');
let list = document.querySelector('.ListCard');
let body = document.querySelector('.body');
let total = document.querySelector('.Total');
let quantity = document.querySelector('.total');

openShoppin.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShoppin.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Product Name 1',
        image: '',
        price: 100 
    },
    {
        id: 2,
        name: 'Product Name 2',
        image: '',
        price: 90
    },
    {
        id: 3,
        name: 'Product Name 3',
        image: '',
        price: 110 
    },
    {
        id: 4,
        name: 'Product Name 4',
        image: '',
        price: 143 
    }
];
let ListCard = [];
function initApp(){
    
}

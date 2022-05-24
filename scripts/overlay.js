const cart = document.querySelector('cart')
const cartDisplay = document.querySelector('cart_overlay')
const buttonTrigger = document.getElementById('button')


document.querySelector('#button').addEventListener('click', () => {
 document.querySelector('.cart').classList.add('cartTransform');
}); 
const overlayButton = document.querySelector('button_overlay')
const cart = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart_overlay');

const menuMobile = () => {
    cart.classList.toggle('is-active');
    cartOverlay.classList.toggle('active');
}

overlayButton.addEventListener('click', menuMobile);
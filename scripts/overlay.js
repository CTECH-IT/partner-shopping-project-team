const cart = document.querySelector('.cart');
const cartDisplay = document.querySelector('.cart_overlay');
const buttonTrigger = document.getElementById('button');
var IscartShowing = false;
const navBar = document.querySelector('.navbar_container');
const navBar1 = document.querySelector('.navbar');
const buttonCart = document.querySelector('.button1');
const overFlow = document.querySelector('.home_page');

function Transition() {

    if (IscartShowing == false) {
        buttonCart.classList.add('hideButton');
        overFlow.classList.add('overflowHidden');
        navBar1.classList.add('hideNav');
        navBar.classList.add('hideNav');
        buttonTrigger.classList.remove('buttonRemove');
        cart.classList.add('showCart');
        cartDisplay.classList.add('transparentBcg');
        buttonTrigger.classList.add('buttonMove');
        IscartShowing = true
    }
    else if (IscartShowing == true) {
        overFlow.classList.remove('overflowHidden');
        buttonCart.classList.remove('hideButton');
        navBar1.classList.remove('hideNav');
        navBar.classList.remove('hideNav');
        cart.classList.remove('showCart');
        cartDisplay.classList.remove('transparentBcg');
        buttonTrigger.classList.remove('buttonMove');
        buttonTrigger.classList.add('buttonRemove');

        IscartShowing = false
    }
}



buttonTrigger.addEventListener('click', Transition)

w



const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productTitle = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p:last-child').textContent.replace('$', ''));
        
        const li = document.createElement('li');
        li.textContent = `${productTitle} - $${productPrice}`;
        cartItems.appendChild(li);

        total += productPrice;
        cartTotal.textContent = total.toFixed(2);
    });
});

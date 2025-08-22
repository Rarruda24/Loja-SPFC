let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
    cartBtn.textContent = `Carrinho (${cart.length})`;
}

let cartItems = [];
let totalPrice = 0;


function updateCart() {
    const cartButton = document.getElementById("cart-btn");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    
    cartButton.textContent = `Carrinho (${cartItems.length})`;

  
    cartItemsList.innerHTML = "";
    cartItems.forEach(item => {
        const listItem = document.createElement("li");

        const productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.alt = item.product;
        productImage.classList.add("cart-item-image");  

        const productDetails = document.createElement("div");
        productDetails.classList.add("cart-item-details");

        const productName = document.createElement("span");
        productName.textContent = `${item.product}`;

        const productPrice = document.createElement("span");
        productPrice.textContent = `R$ ${item.price.toFixed(2)}`;

        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);

        listItem.appendChild(productImage);
        listItem.appendChild(productDetails);

        cartItemsList.appendChild(listItem);
    });

    
    cartTotal.textContent = totalPrice.toFixed(2);
}


function addToCart(product, price, image) {
    cartItems.push({ product, price, image });
    totalPrice += price;
    updateCart();
}


function openCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "block";
}


function closeCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";
}


function checkout() {
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
      
        document.getElementById("thank-you-modal").style.display = "flex";

       
        cartItems = [];
        totalPrice = 0;
        updateCart();

      
        setTimeout(function() {
            document.getElementById("thank-you-modal").style.display = "none";
        }, 5000);
    }
}


function handlePaymentSelection() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.classList.remove('selected');
        const radio = option.querySelector('input[type="radio"]');
        if (radio.checked) {
            option.classList.add('selected');
        }
    });
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute("data-product");
        const price = parseFloat(this.getAttribute("data-price"));
        const image = this.getAttribute("data-image"); 
        addToCart(product, price, image);
    });
});


document.getElementById("cart-btn").addEventListener('click', openCart);


document.getElementById("close-cart").addEventListener('click', closeCart);


document.getElementById("checkout-btn").addEventListener('click', checkout);


document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', handlePaymentSelection);
});


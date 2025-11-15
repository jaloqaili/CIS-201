let cart = []; 

function addToCart(name, price) {
    const item = cart.find(product => product.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(product => product.name !== name);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - SAR${product.price.toFixed(2)} x ${product.quantity}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(product.name);
        li.appendChild(removeBtn);

        cartItems.appendChild(li);
        total += product.price * product.quantity;
    });
      cartTotal.textContent = total.toFixed(2);
}

function clearCart() {
    cart = [];
    updateCart();
}

updateCart();


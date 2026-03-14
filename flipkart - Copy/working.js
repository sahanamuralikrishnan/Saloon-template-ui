const dots = document.querySelector('.dots');
const popup = document.getElementById('popup');

// Toggle popup on dots click
dots.addEventListener('click', (e) => {
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
});


const btnLogin = document.querySelector('.btn-login');
const loginDropdown = document.getElementById('login-dropdown');

// Toggle login dropdown on click
btnLogin.addEventListener('click', (e) => {
    if (loginDropdown.style.display === 'flex') {
        loginDropdown.style.display = 'none';
    } else {
        loginDropdown.style.display = 'flex';
    }
});




document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const products = [
        { id: 1, name: "Projector", price: 6990 },
        { id: 2, name: "Mobile Speakers", price: 499 },
        { id: 3, name: "Monitors", price: 6599 },
        { id: 4, name: "TV", price: 8279 },
        { id: 5, name: "Cameras", price: 49999 },
        { id: 6, name: "Smartwatches", price: 1399 },
        { id: 7, name: "Headphones", price: 6599 },
        { id: 8, name: "Printers", price: 2336 }
    ];

    // Add product to cart
    function addToCart(id) {
        const product = products.find(p => p.id == id);
        if (product) {
            cart.push(product);
            renderCart();
        }
    }
    // ✅ Attach to window but keep inside DOMContentLoaded
    window.addToCart = (id) => {
        const product = products.find(p => p.id == id);
        if (product) {
            cart.push(product);
            renderCart();
        }
    };


    // Remove product from cart
    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    };


    // Calculate total price
    function calculateTotal() {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }

    // Render cart dropdown
    function renderCart() {
        const cartCount = document.getElementById("cart-count");
        const cartTotalDropdown = document.getElementById("total-price");
        const cartTotalPopup = document.getElementById("cart-total");

        const cartItemsDropdown = document.getElementById("cart-items-dropdown");
        const cartItemsPopup = document.getElementById("cart-items");

        cartItemsDropdown.innerHTML = "";
        cartItemsPopup.innerHTML = "";



        cart.forEach(({ id, name, price }) => {
            const itemHTML = `
      <div class="cart-item">
        <span>${name} - ₹${price}</span>
        <button onclick="removeFromCart(${id})">Remove</button>
      </div>
    `;
            cartItemsDropdown.innerHTML += itemHTML;
            cartItemsPopup.innerHTML += itemHTML;
        });

        cartCount.textContent = cart.length;
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalDropdown.textContent = total;
        cartTotalPopup.textContent = total;
    }


    // Toggle dropdown when clicking cart icon
    document.querySelector(".Cart-icon").addEventListener("click", (e) => {
        e.preventDefault();
        toggleCartDropdown();
    });

    // Attach listeners to all Add to Cart buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");
            addToCart(parseInt(productId));
        });
    });
});


// // Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();

}
document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const products = [
        { id: 1, name: "Projector", price: 6990 },
        { id: 2, name: "Speakers", price: 499 },
        { id: 3, name: "Monitors", price: 6599 },
        { id: 4, name: "TV", price: 8279 },
        { id: 5, name: "Cameras", price: 49999 },
        { id: 6, name: "Smartwatches", price: 1399 },
        { id: 7, name: "Headphones", price: 6599 },
        { id: 8, name: "Printers", price: 2336 }
    ];

    // ✅ Add product to cart (with quantity support)
    function addToCart(id) {
        const product = products.find(p => p.id == id);
        if (product) {
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...product, qty: 1 });
            }
            renderCart();
        }
    }
    window.addToCart = addToCart;

    // ✅ Remove product from cart completely
    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    };

    // ✅ Decrease quantity (remove only one unit)
    window.decreaseQty = (id) => {
        const item = cart.find(p => p.id === id);
        if (item) {
            item.qty--;
            if (item.qty <= 0) {
                cart = cart.filter(p => p.id !== id);
            }
            renderCart();
        }
    };

    // ✅ Increase quantity
    window.increaseQty = (id) => {
        const item = cart.find(p => p.id === id);
        if (item) {
            item.qty++;
            renderCart();
        }
    };

    // Calculate total price
    function calculateTotal() {
        return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
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

        cart.forEach(({ id, name, price, qty }) => {
            const itemHTML = `
        <div class="cart-item">
          <span>${name} (x${qty}) - ₹${price * qty}</span>
          <button onclick="decreaseQty(${id})">-</button>
          <button onclick="increaseQty(${id})">+</button>
          <button onclick="removeFromCart(${id})">Remove</button>
        </div>
      `;
            cartItemsDropdown.innerHTML += itemHTML;
            cartItemsPopup.innerHTML += itemHTML;
        });

        cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
        const total = calculateTotal();
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

document.addEventListener("DOMContentLoaded", () => {
    const cartBtn = document.querySelector(".Cart-icon");
    const popup = document.getElementById("popup");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let cart = [];

    // Add to cart logic
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productInfo = button.parentElement;
            const id = productInfo.dataset.id;
            const title = productInfo.dataset.title;
            const price = parseInt(productInfo.dataset.price);

            cart.push({ id, title, price });
            alert(`${title} added to cart!`);
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const cartBtn = document.querySelector(".Cart-icon");
        const popup = document.getElementById("popup");
        const cartItemsContainer = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");

        let cart = [];

        // Add to cart logic
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", () => {
                const productInfo = button.parentElement;
                const id = productInfo.dataset.id;
                const title = productInfo.dataset.title;
                const price = parseInt(productInfo.dataset.price);

                cart.push({ id, title, price });
                alert(`${title} added to cart!`);
            });
        });

        // Toggle popup when "Your Cart" is clicked
        cartBtn.addEventListener("click", () => {
            if (popup.style.display === "none" || popup.style.display === "") {
                popup.style.display = "block";
                renderCart();
            } else {
                popup.style.display = "none";
            }
        });

        // Render cart items inside popup
        function renderCart() {
            cartItemsContainer.innerHTML = "";
            let total = 0;

            cart.forEach(item => {
                const div = document.createElement("div");
                div.textContent = `${item.title} - ₹${item.price}`;
                cartItemsContainer.appendChild(div);
                total += item.price;
            });

            cartTotal.textContent = total;
        }
    });
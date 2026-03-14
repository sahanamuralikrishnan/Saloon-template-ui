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

    const cartBtn = document.querySelector(".Cart-icon");
    const popup = document.getElementById("popup");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    // Add to cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productId = parseInt(button.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                cartCount.textContent = cart.length;
            }
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

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `
        ${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
            cartItemsContainer.appendChild(div);
            total += item.price;
        });

        cartTotal.textContent = total;
    }

    // Remove item
    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        cartCount.textContent = cart.length;
        renderCart();
    };
});
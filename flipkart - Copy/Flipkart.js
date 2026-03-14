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
        <button class="remove-btn" data-id="${id}">Remove</button>
    </div>

    `;
      cartItemsDropdown.innerHTML += itemHTML;
      cartItemsPopup.innerHTML += itemHTML;
    });
    // Attach event listeners after rendering
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        e.stopPropagation(); // prevents closing the dropdown
        const productId = parseInt(button.getAttribute("data-id"));
        removeFromCart(productId);
      });
    });


    cartCount.textContent = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalDropdown.textContent = total;
    cartTotalPopup.textContent = total;
  }


  // Attach listeners to all Add to Cart buttons
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");
      addToCart(parseInt(productId));
    });
  });
});


// Toggle cart dropdown visibility
window.toggleCartDropdown = function (e) {
  e = e || window.event;
  if (e && e.target && e.target.closest('#cart-dropdown')) {
    return;
  }
  const cartDropdown = document.getElementById("cart-dropdown");
  if (cartDropdown) {
    cartDropdown.classList.toggle("is-open");
  }
};

//close cart dropdown when clicking outside
window.addEventListener("click", function (e) {
  const cartDropdown = document.getElementById("cart-dropdown");  
  if (cartDropdown && !e.target.closest('#cart-dropdown') && !e.target.closest('.Cart-icon')) {
    cartDropdown.classList.remove("is-open");
  } 
});
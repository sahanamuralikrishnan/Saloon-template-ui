const dots = document.querySelector('.dots');
const popup = document.getElementById('popup');

// Toggle popup on dots click
dots.addEventListener('click', (e) => {
  if(popup.style.display === 'flex') {
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

// STEP 1 – Product Data
const products = [
  { id: 1, name: "iPhone", price: 60000 },
  { id: 2, name: "Laptop", price: 80000 },
  { id: 3, name: "Shoes", price: 2000 }
];

// STEP 2 – Render Products
const productContainer = document.querySelector("#products");

const renderProducts = (items) => {
  productContainer.innerHTML = "";
  items.forEach(({ id, name, price }) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
      <h3>${name}</h3>
      <p>₹${price}</p>
      <button onclick="addToCart(${id})">Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
  });
};
renderProducts(products);

// STEP 3 – Add To Cart
let cart = [];

const addToCart = (id) => {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
  renderCart();
};

// STEP 4 – Update Cart Count
const cartCount = document.querySelector("#cart-count");
const updateCartCount = () => {
  cartCount.innerText = cart.length;
};

// STEP 5 – Calculate Total
const calculateTotal = () => {
  return cart.reduce((sum, item) => sum + item.price, 0);
};

// STEP 6 – Remove Item
const removeFromCart = (id) => {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  renderCart();
};

// Render Cart Items
function renderCart() {
  const cartContainer = document.getElementById("cart-list");
  cartContainer.innerHTML = "";
  cart.forEach(({ id, name, price }) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <span>${name}</span> - ₹${price}
      <button onclick="removeFromCart(${id})">Remove</button>
    `;
    cartContainer.appendChild(item);
  });
  document.getElementById("cart-total").innerText = calculateTotal();
}

// STEP 7 – Search Feature
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

// STEP 8 – Sort by Price
function sortByPrice() {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
}

// STEP 9 – Simulate API Call
const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

// STEP 10 – Async/Await + Loader
async function loadProducts() {
  try {
    showLoader();
    const data = await fetchProducts();
    renderProducts(data);
  } catch (error) {
    console.log("Error loading products");
  } finally {
    hideLoader();
  }
}

// STEP 11 – Local Storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();
  renderCart();
}
loadCart();

// STEP 12 – Debounce Search
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};








































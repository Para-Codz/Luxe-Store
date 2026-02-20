
let cartItems = [];

  const header = document.querySelector("#header");
  const stick = document.querySelectorAll("#header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  

const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // remove active from all buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      products.forEach(item => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")){
    icon.classList.remove("ph-moon");
    icon.classList.add("ph-sun");
    localStorage.setItem("theme","dark");
  } else {
    icon.classList.remove("ph-sun");
    icon.classList.add("ph-moon");
    localStorage.setItem("theme","light");
  }
});

// SAVE USER PREFERENCE
window.addEventListener("load", ()=>{
  if(localStorage.getItem("theme")==="dark"){
    body.classList.add("dark-mode");
    icon.classList.remove("ph-moon");
    icon.classList.add("ph-sun");
  }
});



const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".header-nav");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// CLOSE WHEN CLICK OUTSIDE
document.addEventListener("click",(e)=>{
  if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});


let cartCount = 0;
let subtotal = 0;

const countDisplay = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartContent = document.querySelector('.cart-content');
const subtotalDisplay = document.querySelector('.subtotal span:last-child');
const emptyCartText = document.querySelector('.empty-cart');

const addedProducts = new Set();

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productId = productCard.dataset.id;

    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(
      productCard.querySelector('.price').textContent.replace('$','')
    );

    if (addedProducts.has(productId)) return;

    // Mark as added
    addedProducts.add(productId);

    cartItems.push({
  id: productId,
  name: productName,
  price: productPrice
});

    button.textContent = "Added ✅";
    button.disabled = true;

    cartCount++;
    countDisplay.textContent = cartCount;

    subtotal += productPrice;
    updateSubtotal();

    emptyCartText.style.display = "none";

    // CREATE CART ITEM
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.dataset.id = productId;

    cartItem.innerHTML = `
      <div class="cart-item-info">
        <h4>${productName}</h4>
        <p>$${productPrice.toFixed(2)}</p>
      </div>
      <button class="remove-item">&times;</button>
    `;

    cartContent.appendChild(cartItem);

    // REMOVE FUNCTION
    cartItem.querySelector('.remove-item').addEventListener('click', () => {

      cartItems = cartItems.filter(item => item.id !== productId);
      cartItem.remove();

      addedProducts.delete(productId);

      button.textContent = "Add to Cart";
      button.disabled = false;

      cartCount--;
      countDisplay.textContent = cartCount;

      subtotal -= productPrice;
      updateSubtotal();

      if (cartCount === 0) {
        emptyCartText.style.display = "block";
      }
    });
  });
});

function updateSubtotal() {
  subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
}

const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCart = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
  cartOverlay.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
  cartOverlay.classList.remove("active");
});

cartOverlay.addEventListener("click", () => {
  cart.classList.remove("active");
  cartOverlay.classList.remove("active");
});


const checkoutBtn = document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {

  if (cartItems.length === 0) {
    alert("Your cart is empty 🛒");
    return;
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  window.location.href = "checkout.html";
});
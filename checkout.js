
const itemsContainer = document.getElementById("checkout-items");
const totalPriceEl = document.getElementById("total-price");
const payBtn = document.getElementById("pay-btn");
const loader = document.querySelector(".loader");

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

let total = 0;

cartItems.forEach(item=>{
  total += item.price;

  const div = document.createElement("div");
  div.classList.add("checkout-item");
  div.innerHTML = `
    <span>${item.name}</span>
    <span>$${item.price.toFixed(2)}</span>
  `;
  itemsContainer.appendChild(div);
});

totalPriceEl.textContent = `$${total.toFixed(2)}`;

payBtn.addEventListener("click",()=>{

  const modal = document.getElementById("payment-modal");

payBtn.addEventListener("click",()=>{

  payBtn.style.display="none";
  loader.style.display="block";

  setTimeout(()=>{

    loader.style.display="none";
    modal.classList.add("active");

    setTimeout(()=>{
      localStorage.removeItem("cartItems");
      window.location.href="index.html";
    },2000);

  },2000);

});

});
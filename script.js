
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

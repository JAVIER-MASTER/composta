document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("btnMenu");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});
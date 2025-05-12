function copyToClipboard() {
  navigator.clipboard.writeText("+996 312 53-39-05");
  alert("Номер скопирован!");
}
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-btn");
  const nav = document.querySelector(".header__nav");

  let backdrop = document.querySelector(".burger-menu-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "burger-menu-backdrop";
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("open");
    backdrop.classList.remove("active");
  }

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("open");
    backdrop.classList.toggle("active");
  });

  backdrop.addEventListener("click", closeMenu);

  nav.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

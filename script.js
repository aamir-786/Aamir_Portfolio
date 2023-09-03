function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener("load", function () {
  const profileText = document.querySelector(".section__text");
  profileText.classList.add("profile-animation");
});

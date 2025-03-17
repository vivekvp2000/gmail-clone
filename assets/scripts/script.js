const menuBtn = document.querySelector(".header-left button");
const mailSideBar = document.querySelector(".mail-sidebar");
const sideBarTitles = document.querySelectorAll(".sidebar-item-title");
const composeBtn = document.querySelector('.compose-btn')

menuBtn.addEventListener("click", function () {
  sideBarTitles.forEach((title) => {
    title.classList.toggle("d-none");
  });
  mailSideBar.classList.toggle("active");

  composeBtn.classList.toggle("min-btn");
});

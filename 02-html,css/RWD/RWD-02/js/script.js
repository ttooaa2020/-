const btnMenu = document.querySelector(".btn-meun");
const mobileMenu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".btn-close");

btnMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// 대상 .classList.remove('클래스명)//

btnClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");
let scrollMenu = document.querySelector(".scroll-menu");
window.addEventListener("scroll", () => {
    if(window.scrollY > 8) {
        logo.style.display = "none";
        menu.style.display = "none";
        scrollMenu.style.top = '0';
    }else {
        logo.style.display = "block";
        menu.style.display = "flex";
        scrollMenu.style.top = '-100%';
    }
});

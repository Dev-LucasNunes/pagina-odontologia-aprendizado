let show = true;

const menuSection = document.querySelector(".menu")
const menuToggle = menuSection.querySelector(".menu-hamburguer")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
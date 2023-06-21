const toggle = document.querySelector(".toggle");
const navv = document.querySelector(".navList ul li");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navv.classList.toggle("active");

})


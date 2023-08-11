
const menuIcon = document.getElementById("menu-icon");
const navUl = document.querySelector(".nav-bar ul");


menuIcon.addEventListener("click", () => {
    navUl.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".img-1");
    const imageText = document.querySelector(".head1");

    imageContainer.addEventListener("click", function() {
        imageText.style.opacity = "1";
    });
});


var typed = new Typed(".typing", {
    strings: ["Front-End Developer", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


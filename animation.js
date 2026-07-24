/* =========================================
   SHADOWVERSE
   ANIMATION
========================================= */

// Hero Animation

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(60px)";

    setTimeout(() => {

        hero.style.transition = "1.2s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0px)";

    }, 300);

});

// Floating Buttons

const heroButtons = document.querySelectorAll(".hero-buttons button");

heroButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});

// Hero Title Glow

const title = document.querySelector(".hero-content h1 span");

setInterval(() => {

    title.classList.toggle("glow");

}, 1000);

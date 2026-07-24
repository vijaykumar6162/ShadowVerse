/* =========================================
   SHADOWVERSE
   MAIN JAVASCRIPT
========================================= */

// Website Loaded

window.addEventListener("load", () => {

    console.log("ShadowVerse Loaded");

});


// =========================================
// Navbar Scroll Effect
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================================
// Smooth Scroll
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =========================================
// Button Hover Effect
// =========================================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


// =========================================
// Reveal Animation
// =========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================================
// Console Message
// =========================================

console.log("Welcome To ShadowVerse");

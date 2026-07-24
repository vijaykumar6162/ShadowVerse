/* =========================================
   SHADOWVERSE
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");

// Cursor Move

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// Cursor Grow on Button

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        cursor.style.width = "35px";
        cursor.style.height = "35px";

    });

    button.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";

    });

});

// Cursor Grow on Links

const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        cursor.style.width = "30px";
        cursor.style.height = "30px";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";

    });

});

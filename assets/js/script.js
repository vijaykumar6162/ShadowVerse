// =========================
// SHADOWVERSE
// =========================

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1800);

});


// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.85)";

header.style.boxShadow="0 0 30px rgba(255,0,0,.35)";

}else{

header.style.background="rgba(0,0,0,.55)";

header.style.boxShadow="none";

}

});


// Reveal Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((sec)=>{

sec.classList.add("hidden");

observer.observe(sec);

});


// Button Glow

const buttons=document.querySelectorAll("button");

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

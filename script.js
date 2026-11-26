// ==================================
// ENGIVLOGER JAVASCRIPT
// ==================================


// PRELOADER

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.classList.add("hide");
    }

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        menuBtn.textContent =
            navLinks.classList.contains("active") ? "✕" : "☰";

    });

}


// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// HERO VIDEO FALLBACK

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {

    heroVideo.addEventListener("error", function () {
        heroVideo.style.display = "none";
    });

}


// REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


// ACTIVE NAVIGATION

const pageSections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    pageSections.forEach(function (section) {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// IMAGE ERROR CHECK

document.querySelectorAll("img").forEach(function (img) {

    img.addEventListener("error", function () {

        console.error("Image not found:", img.getAttribute("src"));

    });

});


// CONSOLE MESSAGE

console.log("ENGIVLOGER website loaded successfully.");
console.log("Creator: Manish Das Bairagi");
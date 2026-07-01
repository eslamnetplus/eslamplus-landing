// ======================================
// Islam Plus v3
// ======================================

// Navbar Scroll Effect
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }

});

// Smooth Active Links
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".service-card,.trust-card,.step-card,.why-card,.contact-card,.network-card"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

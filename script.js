// =========================
// Islam Plus Landing Page
// =========================

// ظهور العناصر أثناء التمرير

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

}, {
threshold: 0.15
});

document.querySelectorAll(
".card, .stat-box, .feature-grid div, .screens img"
).forEach((el) => {

observer.observe(el);

});

// عدادات الإحصائيات

const counters = document.querySelectorAll(".stat-box h3");

counters.forEach((counter) => {

const text = counter.innerText;

if (text.includes("+")) {

const target = parseInt(text.replace("+", ""));

let count = 0;

const speed = target / 50;

counter.innerText = "0";

const updateCounter = () => {

count += speed;

if (count < target) {

counter.innerText = "+" + Math.floor(count);

requestAnimationFrame(updateCounter);

} else {

counter.innerText = "+" + target;

}

};

updateCounter();

}

});

// زر العودة للأعلى

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

backToTop.style.display = "flex";

} else {

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

// تأثير بسيط للأزرار

document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "translateY(-3px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "translateY(0px)";

});

});

console.log("Islam Plus Landing Page Ready");

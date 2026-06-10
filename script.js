// =========================
// Islam Plus Landing Page
// =========================

// ظهور العناصر أثناء التمرير

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".card,.stat-box,.feature-grid div,.screens img"
).forEach((el)=>{

observer.observe(el);

});

// عدادات الإحصائيات

const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter=>{

const text = counter.innerText;

if(text.includes("+")){

const target = parseInt(text.replace("+",""));

let count = 0;

const speed = target / 50;

counter.innerText = "0";

const updateCounter = ()=>{

count += speed;

if(count < target){

counter.innerText = "+" + Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = "+" + target;

}

};

updateCounter();

}

});

// العودة لأعلى الصفحة

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

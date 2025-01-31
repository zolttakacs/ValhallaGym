// Script File

// Home Section Starts
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');

hamburgerBtn.addEventListener('click', activeClass);

function activeClass(){
	hamburgerBtn.classList.toggle('active');
	navList.classList.toggle('active');
}

for(var i = 0; i < navListItems.length; i++){
	navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
	hamburgerBtn.classList.remove('active');
	navList.classList.remove('active');
}

// Code For Navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 150){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
// Home Section Ends



// Valhalla Gym animáció
document.addEventListener("DOMContentLoaded", function () {
    const title = "Valhalla Gym"; 
    const subtitle = "Légy a Valhalla bajnoka, kezd nálunk!";
    const paragraph = "Készen állsz, hogy átlépd a határaid? Csatlakozz, és harcolj velünk a céljaidért!";

    // 📌 Kiválasztjuk az elemeket
    const titleElement = document.querySelector(".banner-title");
    const subtitleElement = document.querySelector(".banner-subtitle");
    const paragraphElement = document.querySelector(".banner-text");

    if (!titleElement || !subtitleElement || !paragraphElement) {
        console.error("Nem található egy vagy több szükséges elem! Ellenőrizd az osztályneveket.");
        return;
    }

    // ✨ Gépírás effektus
    function typeEffect(element, text, speed, callback) {
        element.textContent = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text[i];
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // 📌 Stílusok hozzáadása
    const style = document.createElement("style");
    style.textContent = `
        @keyframes glow {
            0% { text-shadow: 0 0 5px #fff; }
            50% { text-shadow: 0 0 20px #ff0000; }
            100% { text-shadow: 0 0 5px #fff; }
        }
        .glow {
            animation: glow 1.5s infinite alternate;
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
            animation: fade-in 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    // 📌 Elemet törlünk, majd elindítjuk a szövegírást
    titleElement.textContent = "";
    subtitleElement.textContent = "";
    paragraphElement.textContent = "";

    typeEffect(subtitleElement, subtitle, 40, function () { // 🔹 h2 gyorsabban íródik be
        subtitleElement.classList.add("glow"); // 🔴 h2 villogni kezd
        setTimeout(() => {
            typeEffect(titleElement, title, 35, function () { // 🔹 h1 gyorsabban jelenik meg
                subtitleElement.classList.remove("glow"); // ❌ h2 villogás leáll
                titleElement.classList.add("glow"); // 🔴 h1 kezd villogni
                setTimeout(() => {
                    typeEffect(paragraphElement, paragraph, 30, function () { // 🔹 p még gyorsabban íródik be
                        // 📌 h1 tovább villog, de p NEM fog villogni
                    });
                }, 200); // 🔹 Kis késleltetés a p előtt
            });
        }, 1000); // 🔹 Rövidebb várakozás a h1 előtt
    });
});
// Valhalla animáció vége




function checkVisibility() {
    const sections = document.querySelectorAll('.about');
    
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Ha a szakasz látható a képernyőn
        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Görgetéskor figyeljük az eseményt
window.addEventListener('scroll', checkVisibility);

// Az oldal betöltésekor egyszer futtassuk
document.addEventListener('DOMContentLoaded', checkVisibility);

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelectorAll(".dot");
    
    let currentIndex = 0;
    const totalCards = document.querySelectorAll(".card").length;
    const visibleCards = 3;
    
    function updateCarousel() {
        let moveAmount = currentIndex * -270; // Kártya szélesség (250px) + margin (20px)
        track.style.transform = `translateX(${moveAmount}px)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});
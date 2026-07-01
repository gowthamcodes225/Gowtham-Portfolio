// ==========================
// Active Navbar
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Header Blur on Scroll
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.85)";
        header.style.backdropFilter = "blur(25px)";
        header.style.border = "1px solid rgba(255,255,255,.08)";

    }

    else {

        header.style.background = "rgba(255,255,255,.05)";

    }

});


// ==========================
// Scroll Reveal
// ==========================

const revealElements = document.querySelectorAll("section");

function reveal() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// Typing Effect
// ==========================

const text = "Aspiring MERN Stack Developer";

const typing = document.querySelector(".hero h2");

let i = 0;

typing.innerHTML = "";

function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);

    }

}

typeWriter();


// ==========================
// Image Hover Tilt
// ==========================

const image = document.querySelector(".hero-image img");

image.addEventListener("mousemove", e => {

    const x = e.offsetX;
    const y = e.offsetY;

    image.style.transform =
        `rotateY(${(x - 200) / 20}deg)
         rotateX(${-(y - 200) / 20}deg)
         scale(1.05)`;

});

image.addEventListener("mouseleave", () => {

    image.style.transform = "rotateY(0) rotateX(0) scale(1)";

});


// ==========================
// Button Hover Glow
// ==========================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 35px #38bdf8";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "none";

    });

});

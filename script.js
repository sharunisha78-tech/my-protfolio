// ===============================
// TYPING EFFECT
// ===============================

const typing = document.getElementById("typing");

const words = [
    "AI & Data Science Student",
    "Python Learner",
    "Technology Enthusiast",
    "Future Data Scientist"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when clicking navigation

document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    }
);

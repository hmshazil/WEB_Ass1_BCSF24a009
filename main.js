document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interactive Feature: Mobile Navigation Toggle (Hamburger)
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 2. Interactive Feature: Image Slider / Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
    }

    if (slides.length > 0) {
        nextBtn.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }

    // 3. Interactive Feature: Accordion (Show/Hide Content)
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const body = header.nextElementSibling;
            const isOpen = body.style.display === "block";
            
            // Close all other bodies
            document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");
            
            // Toggle current
            body.style.display = isOpen ? "none" : "block";
        });
    });

    // 4. Interactive Feature: Client-Side Form Validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            const nameErr = document.getElementById("nameError");
            const emailErr = document.getElementById("emailError");
            const msgErr = document.getElementById("messageError");

            // Reset errors
            [nameErr, emailErr, msgErr].forEach(err => err.style.display = "none");

            if (name.value.trim() === "") {
                nameErr.innerText = "Name is required";
                nameErr.style.display = "block";
                isValid = false;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.value.match(emailPattern)) {
                emailErr.innerText = "Please enter a valid email address";
                emailErr.style.display = "block";
                isValid = false;
            }

            if (message.value.trim().length < 10) {
                msgErr.innerText = "Message must be at least 10 characters long";
                msgErr.style.display = "block";
                isValid = false;
            }

            if (isValid) {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
            }
        });
    }
});
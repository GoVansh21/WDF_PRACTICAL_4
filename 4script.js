const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle("show");

    });

});


// 2. MODAL POPUP

const modal = document.getElementById("myModal");

const openModal = document.getElementById("openModal");

const closeModal = document.getElementById("closeModal");

if (modal && openModal && closeModal) {

    openModal.addEventListener("click", () => {

        modal.style.display = "flex";

    });

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    });

}


// 3. COFFEE CONTENT SLIDER

const slides = document.querySelectorAll(".slide");

const nextSlide = document.getElementById("nextSlide");

const prevSlide = document.getElementById("prevSlide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

if (slides.length > 0 && nextSlide && prevSlide) {

    nextSlide.addEventListener("click", () => {

        currentSlide = (currentSlide + 1) % slides.length;

        showSlide(currentSlide);

    });

    prevSlide.addEventListener("click", () => {

        currentSlide =
            (currentSlide - 1 + slides.length) % slides.length;

        showSlide(currentSlide);

    });

}


// 4. NOTIFICATION BANNER

const notification = document.getElementById("notification");

const closeNotification =
    document.getElementById("closeNotification");

if (notification && closeNotification) {

    closeNotification.addEventListener("click", () => {

        notification.style.display = "none";

    });

}


// 5. HAMBURGER MENU

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}


// 6. LIGHT AND DARK THEME

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.textContent = "☀️ Light Mode";

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️ Light Mode";

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙 Dark Mode";

        }

    });

}
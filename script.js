// ===============================
// Dark Mode Toggle
// ===============================

const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("change", () => {

    if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }

});

// ===============================
// Load Saved Theme
// ===============================

window.onload = () => {

    if (localStorage.getItem("theme") === "dark") {
        toggle.checked = true;
        document.body.classList.add("dark");
    }

};

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent.");

    form.reset();

});
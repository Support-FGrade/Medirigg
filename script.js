


// Header shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";
        } else {
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {

    const dropdown = document.querySelector(".dropdown > a");
    const subDropdown = document.querySelector(".dropdown-sub > a");

    // MAIN DROPDOWN (Services)
    if (dropdown) {
        dropdown.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle("active");
            }
        });
    }

    // SUB DROPDOWN (Brands)
    if (subDropdown) {
        subDropdown.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle("active");
            }
        });
    }

});
document.querySelectorAll(".dropdown-menu, .dropdown-submenu").forEach(menu => {
    menu.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(function(link) {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
            });
        });

    }

});

const links = document.querySelectorAll(".nav-links a");
let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
}

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
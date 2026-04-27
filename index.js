$(document).ready(function () {

    // TOGGLER MENU
    $(".navbar-collapse").on("show.bs.collapse", function () {
        $(".header-menu").css("background-color", "white");
    });

    $(".navbar-collapse").on("hide.bs.collapse", function () {
        $(".header-menu").css("background-color", "");
    });

    // NAVBAR COLOR CHANGE ON SCROLL
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".header-menu");

        if (window.scrollY > 50) {
            navbar.classList.add("nav-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    });

});
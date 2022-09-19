// fixed header
window.onscroll = function() {
    fixHeader();
};

function fixHeader() {
    let header = document.getElementById("header-section");

    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
}

// burger menu
function toggleMenu() {
    let hamburger = document.getElementById("nav-icon");
    let navMenu = document.getElementById("nav-menu");

    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove(["open"]);
        navMenu.classList.remove(["open"]);
    } else {
        hamburger.classList.add("open");
        navMenu.classList.add("open");
    }
}

// video play-btn
function toggleVideo() {
    let video = document.getElementById("video");
    let button = document.getElementById("play-btn");

    if (video.paused) {
        video.play();
        button.style.display = "none";
    } else {
        video.pause();
        button.style.display = "block";
    }
}

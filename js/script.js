let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times"); // X Icon
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times"); // X Icon
    navbar.classList.remove("active");

    /* Scroll Up Button */
    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
};
/*
function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
    setInterval(loader, 31000); // 3s
}

window.onload = fadeOut();
*/

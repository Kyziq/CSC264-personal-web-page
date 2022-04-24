let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// Menu when website size is small, like zoomed in or on phone.
menu.onclick = () => {
    menu.classList.toggle("fa-times"); // X Icon
    navbar.classList.toggle("active");
};

// When user is scrolling
window.onscroll = () => {
    menu.classList.remove("fa-times"); // X Icon
    navbar.classList.remove("active");

    // Add scroll up button when y more than 60
    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
};

/* // Loader
function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
    setInterval(loader, 31000); // 3s
}
window.onload = fadeOut();
*/

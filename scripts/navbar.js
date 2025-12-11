document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if(path.includes("main.html") || path === "/") {
        document.getElementById("nav-home").classList.add("active");
    } else if(path.includes("projects.html")) {
        document.getElementById("nav-projects").classList.add("active");
    }
});

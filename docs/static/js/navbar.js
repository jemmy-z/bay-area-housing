function navbar_background() {
    var element = document.getElementById('navbar-button');
    var navbar = document.getElementById('navbar');
    
    if (!element.classList.contains('collapsed')) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
}
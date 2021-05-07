function navbar_background() {
    if (window.location.pathname.split("/").pop() != "index.html") {
        return;
    }
    var element = document.getElementById('navbar-button');
    var navbar = document.getElementById('navbar');
    
    if (!element.classList.contains('collapsed')) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
}

$(function () {
    if (window.location.pathname.split("/").pop() != "index.html") {
        return;
    }
    $(document).scroll(function () {
        var buff_height = 70;
        var $nav = $(".navbar");
        var $nav_drop = $(".dropdown-menu");
        var $nav_item = $(".dropdown-item")
        $nav.toggleClass('scrolled', $(this).scrollTop() > window.innerHeight - buff_height);
        $nav_drop.toggleClass('scrolled-dropdown-menu', $(this).scrollTop() > window.innerHeight - buff_height);
        $nav_item.toggleClass('scrolled-dropdown-item', $(this).scrollTop() > window.innerHeight - buff_height);
    });
});
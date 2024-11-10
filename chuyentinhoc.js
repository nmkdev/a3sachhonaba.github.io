window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) { // Change position when page is scrolled
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else {
        navbar.style.position = 'static';
    }
});
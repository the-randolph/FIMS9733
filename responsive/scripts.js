window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var displayLink = document.getElementById("displayLink");

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        displayLink.style.display = "none";
    } 
    else {
        navbar.classList.remove("sticky");
    }
}
        
function myMenu() {
    if (displayLink.style.display === "block") {
        displayLink.style.display = "none";
    } 
    else {
        displayLink.style.display = "block";
    }
}
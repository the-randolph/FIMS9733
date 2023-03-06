window.onscroll = function() {
    stickyNav();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var displayLink = document.getElementById("displayLink");
var menuDisplay = document.getElementById("hamburger");
var elem, style;

elem = document.querySelector('.menu-display');
style = getComputedStyle(elem);

var flag = 0;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        if(style.display === "block") {
            displayLink.style.display = "none";
        }
        //console.log(style.display);
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

function functionExpand(id) {
          var x = document.getElementById(id);
          if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
          } else { 
            x.className = x.className.replace(" w3-show", "");
          }
        }
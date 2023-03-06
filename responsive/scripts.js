window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var displayLink = document.getElementById("displayLink");

var flag = 0;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky");
    }
}

function stickyNavMobile() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        displayLink.style.display = "none";
    } 
    else {
        navbar.classList.remove("sticky");
    }
}

function stickyNavDesktop() {
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

function functionExpand(id) {
          var x = document.getElementById(id);
          if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
          } else { 
            x.className = x.className.replace(" w3-show", "");
          }
        }
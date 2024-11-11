var navbar= document.querySelector('.navbar')
var mainscroll=window.pageYOffset;


window.onscroll= function() {
    var chaluscroll=window.pageYOffset;

    if (mainscroll>chaluscroll) {
        navbar.style.top="0";
        navbar.style.opacity="1";
    }
    else {
        navbar.style.top="-100px";
        navbar.style.opacity="0";
        navbar.style.transition=".5s linear";
    }

    mainscroll=chaluscroll;

}

let popvar = document.querySelector(".pop-box");


function mainclick() {
    popvar.style.left = "0";
}

function mainCloseclick() {
    popvar.style.left = "-100%";
}




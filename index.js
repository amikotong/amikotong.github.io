function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}









window.addEventListener("scroll", () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);



function openNav() {
    document.getElementById("menu").style.width = "100vw";
}

function closeNav() {
    document.getElementById("menu").style.width = "0vw";
}

function infoaAppear() {
    var x = document.getElementById("p-info");
    x.getElementsByClassName("info-com")[0].style.opacity = "1";
    x.getElementsByClassName("info-com")[0].style.transition = "opacity 0.2s ease-in-out";
    x.getElementsByClassName("info-com")[1].style.opacity = "1";
    x.getElementsByClassName("info-com")[1].style.transition = "opacity 0.2s ease-in-out";
}

function infoaHide() {
    var x = document.getElementById("p-info");
    x.getElementsByClassName("info-com")[0].style.opacity = "0";
    x.getElementsByClassName("info-com")[0].style.transition = "opacity 0.1s ease-in-out";
    x.getElementsByClassName("info-com")[1].style.opacity = "0";
    x.getElementsByClassName("info-com")[1].style.transition = "opacity 0.1s ease-in-out";
}

function infobAppear() {
    var x = document.getElementById("p-info");
    x.getElementsByClassName("info-com")[2].style.opacity = "1";
    x.getElementsByClassName("info-com")[2].style.transition = "opacity 0.2s ease-in-out";
    x.getElementsByClassName("info-com")[3].style.opacity = "1";
    x.getElementsByClassName("info-com")[3].style.transition = "opacity 0.2s ease-in-out";
}

function infobHide() {
    var x = document.getElementById("p-info");
    x.getElementsByClassName("info-com")[2].style.opacity = "0";
    x.getElementsByClassName("info-com")[2].style.transition = "opacity 0.1s ease-in-out";
    x.getElementsByClassName("info-com")[3].style.opacity = "0";
    x.getElementsByClassName("info-com")[3].style.transition = "opacity 0.1s ease-in-out";
}

function infocAppear() {
    var x = document.getElementById("p-info");
    x.getElementsByClassName("info-com")[4].style.opacity = "1";
    x.getElementsByClassName("info-com")[4].style.transition = "opacity 0.2s ease-in-out";
    x.getElementsByClassName("info-com")[5].style.opacity = "1";
    x.getElementsByClassName("info-com")[5].style.transition = "opacity 0.2s ease-in-out";
}

function infocHide() {
    var x = document.getElementById("p-info");
    x.getElementsByClassName("info-com")[4].style.opacity = "0";
    x.getElementsByClassName("info-com")[4].style.transition = "opacity 0.1s ease-in-out";
    x.getElementsByClassName("info-com")[5].style.opacity = "0";
    x.getElementsByClassName("info-com")[5].style.transition = "opacity 0.1s ease-in-out";
}





let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".hover-com");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";

}


navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-hover");
        link.classList.remove("hovered-link");
    });

    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-hover");
        link.classList.add("hovered-link");
    });

});





function copyToClipboard(e1, e2) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(e1).text() + $(e2).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

/////////////////////////////////////////////////////////

//const controller = new ScrollMagic.Controller();
//
//const scene = new ScrollMagic.Scene({
//        triggerElement: "#trigger",
//        duration: 600,
//        triggerHook: 0.05
//    })
//    .setPin("#pin")
//    .addIndicators()
//    .addTo(controller);
//

/////////////////////////////////////////////////////////


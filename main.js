let bar = document.getElementById("bar");
let a = document.getElementById('aa');
let s = document.getElementById('sa');
let d = document.getElementById('da');
let f = document.getElementById('fa');
let e = document.getElementById('calluss');
let l = document.getElementById('ll');


window.onscroll = function() {
  let value = scrollY ; 
  if (value >= 18) {
    bar.style.backgroundColor="white";
    a.style.color ="black";
    a.style.borderColor ="red";
    s.style.color ="black";
    s.style.borderColor ="black";
    d.style.borderColor ="black";
    d.style.color ="black";
    f.style.borderColor ="black";
    f.style.color ="black";
    e.style.borderColor ="black";
    e.style.color ="black";
    l.style.borderColor ="black";
    l.style.color ="black";
  } else {
    bar.style.backgroundColor="transparent";
    a.style.color ="white";
    a.style.borderColor ="white";
    s.style.color ="white";
    d.style.borderColor ="white";
    d.style.color ="white";
    f.style.borderColor ="white";
    f.style.color ="white";
    e.style.borderColor ="white";
    e.style.color ="white";
    l.style.borderColor ="white";
    l.style.color ="white";
  }
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesw");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

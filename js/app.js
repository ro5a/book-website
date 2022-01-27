var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
///shoping cart count
$(document).ready(function(){
  //create variable
  var counts = 0;
  $(".addtocart").click(function () {
  //to number and increase to 1 on each click
     counts += +1;
     $(".cart-counter").animate({
  //show span with number
               opacity: 1
           }, 300, function () {
  //write number of counts into span
               $(this).text(counts);
           });
       }); 
});

//search
function myFunction() {
  var input = document.getElementById("Search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('target');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}
// navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// timer of product display
var productCount = 400;

function countdown(){
  
  day = 28;
  today           = new Date();
  BigDay          = new Date("January "+day+",2022");

  msPerDay        = 24 * 60 * 60 * 1000;

  timeLeft        = (BigDay.getTime() - today.getTime());

  e_daysLeft      = timeLeft / msPerDay;
  daysLeft        = Math.floor(e_daysLeft);
  e_hrsLeft       = e_daysLeft*24;
  hrsLeft         = Math.floor(e_hrsLeft);
  minsLeft        = Math.floor((e_hrsLeft - hrsLeft)*60);
  document.getElementById('output').innerHTML = "<p>There are only<b> " + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </b> Until January 30th 2022</p>";
}
countdown()
window.setInterval(function(){ countdown(); productCount -=1; },60000)
const h2 = document.createElement("h2");
h2.textContent = "TRAVEL AND SEE THE BEAUTY OF OUR MOTHERLAND";
document.querySelector("body").appendChild(h2);
let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
  slidesIndex++;
  if(slideIndex>slides.length) {slideIndex = 1}
  slides[slidesIndex-1].style.display = "block";
  setTimeout(showSlides,2000);
  }  

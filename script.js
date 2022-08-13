/*const h2 = document.createElement("h2");
h2.textContent = "TRAVEL AND SEE THE BEAUTY OF OUR MOTHERLAND";
document.querySelector("body").appendChild(h2);*/

var slideIndex,slides,dots,captionText; 
function showSlides(){
    slideIndex = 0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;

    captionText= document.querySelector(".captionHolder .captionText");
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

 dots=[];
 var dotsContainer=document.getElementById("dotsContainer");
   for (var i=0;i<slides.length;i++){
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dots.push(dot);

   dots[slideIndex].classList.add("active");

   }





}
showSlides(); 


/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}


//function showSlides(n) {
    //let i;
    //let slides = document.getElementsByClassName("mySlides");
    //let dots = document.getElementsByClassName("demo");
    /*let captionText = document.getElementById("caption");
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
  
  */
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".expand-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const nestedList = this.nextElementSibling;
            nestedList.style.display = nestedList.style.display === "block" ? "none" : "block";
        });
    });
});


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll(".slide");
    const offset = -currentSlide * 100;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${offset}%)`;
    }
}

var menuText = "Menu";

$(
  function(){
    $("body").addClass("js");

    $(".menu_main").prepend("<a href='#' class='link_nav'>"+ menuText +"</a>");
    
    $(".menu_main li:has(ul)").addClass("menu_parent");
    
    $(".link_nav").click(
      function(){
        $(".menu_main > ul").toggleClass("menu_expanded");
        $(this).toggleClass("menu_parent_exp");
        return false;
      }
    )
    $(".menu_parent").click(
      function(){
        $(this).find(">ul").toggleClass("menu_expanded");
        $(this).toggleClass("menu_parent_exp");
        return false;
      }
    )    
  }
)

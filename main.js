var images =["./resources/moutains_content-new.png",
"./resources/moutains_content.png",
"./resources/msl-new-moutains_content.png"
]

var slideIndex =0;

window.onload = function(){
    showSlides(slideIndex);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n){
    if (n > images.length-1)
        slideIndex = 0;
    if (n < 0)
        slideIndex = images.length-1;

    $("#background").attr("src",images[slideIndex]);
    
}
// Navigation Buttons
let nav_btns = document.getElementsByClassName("nav_btn")

for (let i = 0; i < nav_btns.length; i++) {
    const nav_btn = nav_btns[i];
    nav_btn.addEventListener("click", ()=>{
        nav_btn.style.fontFamily = "'Playfair Display', serif"
        nav_btn.style.fontStyle = "italic"
    })
}

//Slides with Buttons 
let slideIndex = 1
showSlides(slideIndex)

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("img_")

    if(n > slides.length) {slideIndex = 1}
    if(n < 1){slideIndex = slide.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    //slideIndex++
    //if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"
    //setTimeout(showSlides, 100)
}

//Image Buttons
let img_btns = document.getElementsByClassName("img_btn")
function currentSlide(n) {
    for (let i = 1; i <= img_btns.length; i++) {
        img_btns[i-1].src = "assets/btn_0" + i + ".png"
    }
    img_btns[n-1].src = "assets/btn_0" + n + "_cl.png"
    showSlides(slideIndex = n)
}

//Automatic Time Events
let start = document.getElementById("start_btn")
let pause = document.getElementById("pause_btn")
let restart = document.getElementById("restart_btn")

start.addEventListener("click", ()=>{
    start.style.display = "none"
    pause.style.display = "flex"
})

pause.addEventListener("click", ()=>{
    pause.style.display = "none"
    start.style.display = "flex"
})

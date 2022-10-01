// const nav_btns = document.querySelectorAll(".nav_btn")

// nav_btns.forEach(nav_btn => {
//     nav_btn.addEventListener("click", ()=>{
//         nav_btn.style.fontFamily = "'Playfair Display', serif"
//         nav_btn.style.fontStyle = "italic"
//     })
// })

let nav_btns = document.getElementsByClassName("nav_btn")

for (let i = 0; i < nav_btns.length; i++) {
    const nav_btn = nav_btns[i];
    nav_btn.addEventListener("click", ()=>{
        nav_btn.style.fontFamily = "'Playfair Display', serif"
        nav_btn.style.fontStyle = "italic"
    })
}
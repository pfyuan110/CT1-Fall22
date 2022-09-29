let clrButton = document.getElementById("colorBtn")
console.log(clrButton)
const mnElement = document.getElementById("mainElem")
const txtButton = document.getElementById("textBtn")
const imgButton = document.getElementById("imageBtn")

clrButton.addEventListener("click", ()=>{
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    console.log(red,green,blue)
    mnElement.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
})

//"()=>{}" means function, you can define the name
const addSomeText = ()=>{
    let htmlElem = document.createElement("h3")
    let someText = "This is a string of text!"
    htmlElem.innerText = someText
    //let htmlElem be mnElement's child
    mnElement.appendChild(htmlElem)
}
txtButton.addEventListener("click", addSomeText)

const addAnImage = ()=>{
    let imgElem = document.createElement("img")
    imgElem.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/face-with-rolling-eyes_1f644.png"
    imgElem.alt = "kidding"
    //add your new img to a class
    //imgElem.classList.add("myclass")

    mnElement.appendChild(imgElem)
}
imgButton.addEventListener("click", addAnImage)
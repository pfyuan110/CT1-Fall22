let song
let button
let amp
let xoff = 0

let volHistory = []

function setup() {
    createCanvas(600, 600)
    angleMode(DEGREES)
    colorMode(HSB,100)

    song = loadSound('Paolo Pavan - Heart.mp3')
    button = createButton('play')
    button.mousePressed(togglePlaying)

    amp = new p5.Amplitude()
}

//it seems not working
function loaded() {
    console.log('loaded')
}

function togglePlaying() {
    if(!song.isPlaying()){
        song.play()
        button.html('pause')
    } else {
        song.pause()
        button.html('play')
    }
}

function draw() {
    background(0)

    let vol = amp.getLevel()
    volHistory.push(vol)        //what is push function?
    console.log(vol)
    
    let hue = map(noise(xoff), 0, 1, 0, 15)
    xoff += 0.01

    translate(width/2, height/2)
    fill(hue,90,40)
    stroke(0,20)
    strokeWeight(1)
    for (let i = 0; i < 360; i++) {
        let r = map(volHistory[i], 0, 1, 100, i)
        let posX = r * cos(i)
        let posY = r * sin(i)

        let d = map(volHistory[i], 0, 0.5, 1, 500)
        ellipse(posX, posY, d)
    }


    if (volHistory.length > 360){
        volHistory.splice(0,1)  //what is splic function?
    }
}
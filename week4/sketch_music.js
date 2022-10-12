let song
let button
let amp

let volHistory = []

function setup() {
    createCanvas(200, 200)
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
    background(100)

    let vol = amp.getLevel()
    volHistory.push(vol)        //what is push function?
    //console.log(vol)
    
    translate(width/2, height/2)
    fill(50,90,90)
    stroke(100,70)
    strokeWeight(1)
    for (let i = 0; i < 360; i++) {
        let r = map(volHistory[i], 0, 1, 10, i)
        let posX = r * cos(i)
        let posY = r * sin(i)

        let d = map(volHistory[i], 0, 0.5, 1, 100)
        ellipse(posX, posY, d)
    }


    if (volHistory.length > 360){
        volHistory.splice(0,1)  //what is splic function?
    }
}
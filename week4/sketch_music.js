let song
let button
let amp


function setup() {
    createCanvas(200, 200)
    song = loadSound('Paolo Pavan - Heart.mp3')
    amp = new p5.Amplitude()
}

function loaded() {
    console.log('loaded')
    button = createButton('play')
    button.mousePressed(togglePlaying)
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

// function draw() {
//     background(0)

//     let vol = amp.getLevel()
//     let diam = map(vol, 0, 1, 10, 200)
//     console.log(vol)

//     fill(255,0,255)
//     noStroke()
//     ellipse(width/2, height/2, diam, diam)
// }
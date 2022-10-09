let song
let button


function setup() {
    createCanvas(200, 200)
    song = loadSound('Paolo Pavan - Heart.mp3')
    button = createButton('play')
    button.mousePressed(togglePlaying)
    background(0)
}

function loaded() {
    console.log('loaded')
}

function togglePlaying() {
    song.play()
}

function draw() {

}
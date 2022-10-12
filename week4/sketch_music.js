let song
let button


function setup() {
    createCanvas(200, 200)
    song = loadSound('Paolo Pavan - Heart.mp3')
    background(0)
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
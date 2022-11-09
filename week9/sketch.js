let bird
let pipes = []
let score
let button

const modelURL = 'https://teachablemachine.withgoogle.com/models/RzUcLavvN/'
const checkpointURL = modelURL + "model.json"
const metadataURL = modelURL + "metadata.json"
const flip = true

let model
let totalClasses
let myCanvas

let classification = "None Yet"
let probability = "100"
let poser
let video

async function load() {
  model = await tmPose.load(checkpointURL, metadataURL);
  totalClasses = model.getTotalClasses();
  console.log("Number of classes, ", totalClasses);
}

function videoReady() {
  console.log("Video Ready");
  predict();
}

async function setup() {
  myCanvas = createCanvas(640, 480)
  myCanvas.parent('sketch_holder')
  
  // let button = createButton("RESTART");
  // button.mousePressed(resetSketch);
  
  bird = new Bird()
  pipes.push(new Pipe())
  score = 0
  
  await load()
  video = createCapture(VIDEO, videoReady)
  video.size(640,480)
  video.hide()

}

function draw() {
  if(video){
    image(video,0,0)
  } else {background(0)}
  
  //Classification result
  fill(255,0,0)
  textSize(18)
  text("Result:" + classification, 10, 40)
  text("Probability:" + probability, 10, 20)

  
  //Flappy Bird part
  textSize(18)
  fill(255,255,0)
  text(score,width/2,30)
  
  for(let i = pipes.length-1; i >= 0; i--){
    pipes[i].show()
    pipes[i].update()
    
    if(pipes[i].hits(bird)){
      background(255,0,0,70)
      textSize(48)
      textAlign(CENTER,CENTER)
      text("YOU DIED",width/2,height/2)
      noLoop()
    }
    
    if(pipes[i].overs(bird)){
      score += 1
    }
    
    if(pipes[i].offscreen()){
      pipes.splice(i, 1)
    }
  }
  
  if (frameCount % 80 == 0){
    pipes.push(new Pipe())
  }
  
  bird.show()
  bird.update()
  
  if(classification == "Flappy High" && probability == 1.00){
    bird.up()
  }
}

function keyPressed(){
  if(key == " "){
    bird.up()
  }
}

async function predict() {
  // Prediction #1: run input through posenet
  // predict can take in an image, video or canvas html element
  const flipHorizontal = false;
  const {
    pose,
    posenetOutput
  } = await model.estimatePose(
    video.elt, //webcam.canvas,
    flipHorizontal
  );
  // Prediction 2: run input through teachable machine assification model
  const prediction = await model.predict(
    posenetOutput,
    flipHorizontal,
    totalClasses
  );
  
  // Sort prediction array by probability
  // So the first classname will have the highest probability
  const sortedPrediction = prediction.sort((a, b) => -a.probability + b.probability);

  //communicate these values back to draw function with global variables
  classification = sortedPrediction[0].className;
  probability = sortedPrediction[0].probability.toFixed(2);
  if (pose) poser = pose.keypoints;
  predict();
}

// How to clear the bird and pipes before and make a new one?
// function resetSketch() {
//   image(video,0,0)
//   bird = new Bird()
//   pipes.push(new Pipe())
//   score = 0
//   loop()
// }
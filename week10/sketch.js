let myCanvas;

let bird;
let pipes = [];
let score;
let button;

let img_eyes;
let img_nose;
let img_mouth;

const flip = true;
let video;
let faceapi;
let detections;

let nose_x;
let nose_y;

let runGame = false;

const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
};

function gotResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  detections = result;
}

function setup() {
  myCanvas = createCanvas(640, 480)
  myCanvas.parent('sketch_holder')

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceapi = ml5.faceApi(video, detection_options, modelReady);
  
  img_eyes = loadImage('assets/eye_1f441-fe0f.png');
  img_nose = loadImage('assets/pig-nose_1f43d.png');
  img_mouth = loadImage('assets/mouth_1f444.png');
}

function modelReady() {
  console.log("ready!");
  console.log(faceapi);
  faceapi.detect(gotResults);
  if (!runGame) startGame();
}

//Playing the Game
function startGame() {
  bird = new Bird();
  pipes = []; //initialize the pipes array
  pipes.push(new Pipe());
  score = 0;
  runGame = true; //set the game state
  loop();
}

function draw() {
  // background(255);
  // push();
  // scale(-1, 1);
  // image(video, -width, 0);
  // pop();
  
  //Whether drawing your face
  //image(video, width/2, height/2, width, height);
  background(255,255,255);
  console.log(runGame);

  if (detections) {
    if (detections.length > 0) {
      drawLandmarks(detections);
    }
  }
  faceapi.detect(gotResults);
  
  //Flappy Bird part
  if (runGame) {
    textSize(18);
    fill(245, 78, 66);
    stroke(255,255,255);
    text(score, width / 2, 30);

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
        background(255, 0, 0, 70);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("YOU DIED", width / 2, height / 2);
        noLoop();
      }

      if (pipes[i].overs()) {
        console.log('overs bird');
        score += 1;
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    if (frameCount % 20 == 0) {
      pipes.push(new Pipe());
    }

    bird.show();
  }
}

function keyReleased() {
  if (key == "r" || key == "R") {
    console.log("pressed");
    runGame = false;
    startGame();
  }
}

//Drawing your face
function drawLandmarks(detections) {
  noFill();
  stroke(245, 78, 66);
  strokeWeight(2);

  for (let i = 0; i < detections.length; i++) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;

    //drawPart(mouth, true);
    //drawPart(nose, false);
    //drawPart(leftEye, true);
    drawPart(leftEyeBrow, false);
    //drawPart(rightEye, true);
    drawPart(rightEyeBrow, false);
    
    nose_x = nose[2].x;
    nose_y = nose[2].y;
    
    imageMode(CENTER);
    image(img_mouth, mouth[3].x, mouth[3].y, 30, 30);
    image(img_eyes, leftEye[2].x, leftEye[2].y, 30, 30);
    image(img_eyes, rightEye[2].x, rightEye[2].y, 30, 30);
  }
}

function drawPart(feature, closed) {
  beginShape();
  for (let i = 0; i < feature.length; i++) {
    const x = feature[i]._x;
    const y = feature[i]._y;
    vertex(x, y);
  }
  
  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}

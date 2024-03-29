var img;
var img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20;
var instructions_2;
var value = 0;
var shaking = false;
var timer = 7;

function preload() {
  img = loadImage('assets/magic_ball_texture_b.png');

}
var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  background(50);
  // 20 texture for 20 different answers
  img01 = loadImage('assets/01_as i see it yes.png');
  img02 = loadImage('assets/02_it is certain.png');
  img03 = loadImage('assets/03_it is decidedly so.png');
  img04 = loadImage('assets/04_most likely.png');
  img05 = loadImage('assets/05_outlook good.png');
  img06 = loadImage('assets/06_signs point to yes.png');
  img07 = loadImage('assets/07_without a doubt.png');
  img08 = loadImage('assets/08_yes.png');
  img09 = loadImage('assets/09_yes definitely.png');
  img10 = loadImage('assets/10_you may rely on it.png');
  img11 = loadImage('assets/11_reply hazy try again.png');
  img12 = loadImage('assets/12_ask again later.png');
  img13 = loadImage('assets/13_better not tell you now.png');
  img14 = loadImage('assets/14_cannot predict now.png');
  img15 = loadImage('assets/15_concentrate and ask again.png');
  img16 = loadImage('assets/16_dont count on it.png');
  img17 = loadImage('assets/17_my reply is no.png');
  img18 = loadImage('assets/18_my sources say no.png');
  img19 = loadImage('assets/19_outlook not so good.png');
  img20 = loadImage('assets/20_very doubtful.png');

  frameRate(30);
  angleMode(DEGREES);

  setShakeThreshold(29);

  instructions_2 = createDiv('Ask a Yes/No question, then shake the Magic 8 Ball to get your answer!');
  instructions_2.style('position: absolute; bottom: 4%; left: 20%; width: 60vw; height: 10vh; color: white; text-align: center; font-family: Verdana; font-size: 13px');
}

function draw() {

  noStroke();
  fill(0);

  if (shaking == false) {
    // rotate the sphere with the gyroscope
    rotateY(90 + rotationY*3);
  } else {
    // frontal position when the user gets the answer
    rotateY(90);
  }
  // texture without answer
  if (shaking == false) {
    texture(img);
    sphere(width/2.46, 40, 40);
  }
  // timer to reset shake function
  if (frameCount % 30 == 0 && timer > 0 && shaking == true) {
    timer--;
    instructions_2.html('New question in: ' + timer);
  }
  if (timer == 0) {
    shaking = false;
    value = 0;
    timer = 7;
    instructions_2.html('Ask a Yes/No question, then shake the Magic 8 Ball to get your answer!');
  }
}

function deviceShaken() {
  // random answer when the user shakes the phone
  var answers = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
  value += 31;
  if (value = 30 && timer == 7) {
    shaking = true;
    texture(random(answers));
    sphere(width/2.46, 24, 24); // 130px
  }
}

function touchMoved() {
  return false;
}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}

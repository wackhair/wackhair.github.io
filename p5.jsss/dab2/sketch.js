function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);


  let x = mouseX;
  let y = mouseY;
  let headSize = 0.5 * mouseX;
  let hr = headSize / 2;
  let manHeight = 150;
  let rightArmLenght = 50 + y;
  let leftArmLength = 50 + x;


  strokeWeight(0.05 * x)
  fill(0,255,255)
  circle(x, y, headSize)
  strokeWeight(0.05 * x)
  line(x, y + hr, x, y + headSize + manHeight);
  strokeWeight(0.005 * x)

  //Arme
  Line(y - 50, x, y - 20, x + 40)


  if (eyeFlag) {
    fill(255,0,0);
  } else {
    fill(0, 255, 0);
  }

  circle(x - hr / 2.5, y - hr / 2, 0.05 * x)
  circle(x + hr / 2.5, y - hr / 2, 0.05 * x)
  
}

let eyeFlag = false;


function mousePressed() {
  eyeFlag = !eyeFlag

}
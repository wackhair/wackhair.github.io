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
  let armLenght = 50;;


  strokeWeight(0.05 * x)
  fill(0,255,255)
  circle(x, y, headSize)
  strokeWeight(0.05 * x)
  line(x, y + hr, x, y + headSize + manHeight);
  strokeWeight(0.005 * x)


  if (eyeFlag) {
    fill(255,0,0);
  } else {
    fill(0, 255, 0);
  }

  circle(x - hr / 2.5, y - hr / 2, 0.05 * x)
  circle(x + hr / 2.5, y - hr / 2, 0.05 * x)
  
    //Arme
    line(x, y + 70 + headSize, x * 0.5 + headSize + 140 - armLenght, y + 40)
    line(x, y + 70 + headSize, x * 0.5 + armLenght, y + 40)
}

let eyeFlag = false;



function mousePressed() {
  eyeFlag = !eyeFlag

}

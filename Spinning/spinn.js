let img;
let imgSize = 512
let vinkel = 1
let speed = 0.01
function draw() {
  let sideArrows = "Use arrows to the side for Spin.."
  let  upAndDownArrows = "Use arrows to the up and the down for Speeeeed!"
    createCanvas(windowWidth-25, windowHeight-25);
    textSize(30);
  text(sideArrows, 3, 3, 3000, 3000)
  text(upAndDownArrows, 3, 35, 3000, 3000)
    translate(mouseX, mouseY)
    rotate(speed * vinkel);
    imageMode(CENTER)
    image(img, 0,0);
      if(keyIsDown(LEFT_ARROW)) {
        vinkel ++;
      }
      if(keyIsDown(RIGHT_ARROW)) {
        vinkel --;
      }

    } 
    function keyPressed() {

      if (keyCode === UP_ARROW){
        speed = speed * 2;
      }
      if (keyCode === DOWN_ARROW){
        speed = speed / 2;
      }
    } 
function preload() {
    img = loadImage('Spiral.png');


}

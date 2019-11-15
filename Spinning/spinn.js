let img;
let imgSize = 512
let vinkel = 1
let speed = 0.01
function draw() {
    createCanvas(windowWidth-25, windowHeight-25);
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

let img;
let imgSize = 512
let vinkel = -1
function draw() {
    createCanvas(windowWidth, windowHeight);
    translate(windowWidth/2,windowHeight/2)
    rotate(0.01 * vinkel);
    imageMode(CENTER)
    image(img, 0,0);
    vinkel --
}

function preload() {
    img = loadImage('Spiral.png');


}

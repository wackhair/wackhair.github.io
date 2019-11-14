let img;
let imgSize = 512
function draw() {
    createCanvas(windowWidth, windowHeight);
    image(img, windowWidth/2-imgSize/2, windowHeight/2-imgSize/2);
}

function preload() {
    img = loadImage('Spiral.png');

}

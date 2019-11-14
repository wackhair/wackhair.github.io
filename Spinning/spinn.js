let img;
function setup() {
    createCanvas(400, 400);
    image(img, 0, 0);
}

function preload() {
    img = loadImage('Spiral.png');
}

let img;
let imgSize = 512
let vinkel = 1
let speed = 0.01

function draw() {
    createCanvas(windowWidth - 25, windowHeight - 25);
    textSize(15);
    text("Use arrows to the up and the down for Speeeeed!", 3, 3, 3000, 3000)
    text("Use arrows to the side for Spin..", 3, 20, 3000, 3000)

    translate(mouseX, mouseY)
    rotate(speed * vinkel);
    imageMode(CENTER)
    image(img, 0, 0);

    if (keyIsDown(LEFT_ARROW)) {
        vinkel++;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        vinkel--;
    }
}
function preload() {
    img = loadImage('Spirale.png');

}

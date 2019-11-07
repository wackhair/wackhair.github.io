let lyshastighed = 3.00e8;
let R = 1.097e7;
let planke = 6.63e-34;
let n;

function setup() {
  n = 1;
  console.log("Klar til nogle syge udregninger?")
}


function draw() {
  background(220);

  
  let E = -planke * lyshastighed * R * 1 / (n * n);
  let Ev = E/1.602e-19;
  
  
  console.log("Energiniveau " + n + " er " + Ev);
      n++;
  if (n >= 11) {
    
    console.log("Finito");
    noLoop();
  }

}
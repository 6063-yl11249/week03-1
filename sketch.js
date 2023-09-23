let maxDiam = 50

function setup() {
    createCanvas(600, 600);
}


function draw() {
    background("orange");
    fill("pink");

    for (let xpos = 0; xpos <= width; xpos += maxDiam) {
       for (let ypos = 0; ypos <= height; ypos += maxDiam) {
           for(let dim = maxDiam; dim >5; dim -= 8 ) {
              ellipse (xpos, ypos, dim, dim);
           }
        }
    }
}

   //ellipse(0, 0, eDiam, eDiam);
   //ellipse(0, eDiam, eDiam, eDiam);
   //ellipse(0, 2*eDiam,eDiam, eDiam);

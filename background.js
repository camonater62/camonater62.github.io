
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('overflow', 'hidden');
}

function draw() {
    clear(0);
    translate(-width/2, -height/2);

    // TODO
    noLoop();
}
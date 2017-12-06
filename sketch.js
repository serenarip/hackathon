// VARIABLES

var santa;
var bell;
var bgcolor;
var presents;
var fumetto;
var tree;
let snowflakes = []; 

// FUNCTIONS

function preload() {
    santa = loadImage("/assets/santa.png");
    bell = loadImage("/assets/bell.png");
    presents = loadImage("/assets/presents.png");
    fumetto = loadImage("/assets/ohohoh.png");
    tree = loadImage("/assets/tree.png");
}

function setup() {

    angleMode(DEGREES);
	createCanvas(windowWidth, windowHeight);
     for (i = 0; i < 10000; i++) {
      snowflakes[i] = new Snowflake();
 }
	// Microphone
    mic = new p5.AudioIn();
	mic.start();
}

function draw() {

	// Get the volume
	var volume = mic.getLevel();

    bgcolor = "#EFC184";
	background(bgcolor);
    
	push();

	//Start with transformations
	//move to the center of the canvas
	translate(width / 2, height / 2);

	// Set the new size. Volume goes from 0 to 1.
	// You can remap it to any size you want.
	var minSize = 1;
	var maxSize = 90;
	var size = map(volume, 0, 1, minSize, maxSize);

	// Elements in the canvas
    
    
    
    // floor
    fill('#42151A');
    noStroke();
    rect(-windowWidth/2, 120, windowWidth, windowHeight);
    
    push();
    
    // bell
    translate(-120, -200);
    var rotation = size*2;
    rotate(rotation);
    image(bell, 0, 0, 70, 70);
    pop();
    
    // santa
    image(santa, -100,-150, 200, 290);
    
    // presents
    image(presents, 100,-150, 200, 290);
    
    // tree
    image(tree, -300,-150, 200, 290);
    
    // santa's mouth
    stroke('black');
    strokeWeight(0.5);

    fill('#F4D6B4');
    ellipse(-10,-50, size/4, size/4);
    // fill('#AF353E');
    // ellipse(-10,-50, size/4, size/4);
    
    // eyes
    
    push();
    rotate(30);
    
    fill('white');
    ellipse(-50,-75, 13, size/3);
    ellipse(-20,-75, 13, size/3);
    fill('lightblue');
    ellipse(-50,-75, 7, size/5.5);
    ellipse(-20,-75, 7, size/5.5);
    fill('black');
    ellipse(-50,-75, size/8, size/8);
    ellipse(-20,-75, size/8, size/8);
    pop();
    
    // texts
    
    fill('white');
    textSize(30);
    text("It's Christmas time!", -130, 200);
    textSize(15);
    text("Make noise to wake up Santa.", -100, 230);
    
    if (size > 15) {
        fill('black');
        textSize(15);
        image(fumetto, 10, -250, 80, 70);
        text("Oh oh oh!", 17, -215);
    }
    
	pop();
    
    // falling snow 
    
    for (i = 0; i < snowflakes.length; i++) {
    snowflakes[i].show();
    snowflakes[i].move();
    }
       
        
    

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// OBJECTS

class Snowflake {
   constructor() {
      this.x = random(0, 10000);
      this.y = random(-10000, 0);
   }
   
   move() {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(1, 5);
   }
   
   show() {
      fill('white');
      noStroke();
      ellipse(this.x, this.y, 10, 10);
   }}

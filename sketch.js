function setup() {
  createCanvas(450, 450);
  background("black")
}

function draw() {
  stroke("pink");
  fill("purple");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
   background(color(100,0,0));
  cor = color(random(0,50), random(0,100), random(0,100));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,30);
 
  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
  
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
  
  if (mouseIsPressed){
    cor = color(random(0,300), random(0,300), random(0,300), random(0,300));
  }
    
}


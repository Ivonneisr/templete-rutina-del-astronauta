var bg,sleep, brush, gym, eat, bath, move;
var astronaut;
/*precarcatus imagenes aquí como este ejemplo haciendo mencion de la carpeta*/
function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
 
}

function setup() {
  createCanvas(600, 500);
  
 //Crea un sprite de astronauta y agrégale animación para dormir.
 //escalar el tamaño del astronauta de acuerdo con tu lienzo.
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
 //escribe aquí las demas instrucciones


  //Crea edgeSprites(bordes) y rebota el astronauta con los bordes
  


  //código para que el astronauta se cepille con flecha arriba
    if(keyDown("UP_ARROW")){
   
  }
  //código para que el astronauta haga ejercicio con flecha abajo
  if(keyDown("DOWN_ARROW")){
   
  }
  
  //código para que el astronautase alimente con flecha izquierda
  if(keyDown("LEFT_ARROW")){
  
  }
  //código para que el astronauta se bañe con flecha derecha
  if(keyDown("RIGHT_ARROW")){
   
  }
//código para que el astronauta se mueva con presionando "m"
  if(keyDown("m")){
   
  }

}
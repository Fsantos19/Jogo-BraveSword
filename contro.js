function telaControles(){
  background(imgTelaCont);

  stroke(0);
  fill(173,255,47);
  textSize(20);
  text("movimentação do menu/Enter",300,150);
  
  //botão de voltar 
  noStroke();
  fill(0,100,0);
  rect(430,340,100,50,10); 
  
    //botão voltar
    fill(173,255,47);
    text("Voltar",440,375);
  
  // configuração do mouse 
  push();
  fill(255);
  circle(mouseX, mouseY, 10);
  pop();
  
 //botão tras estrutura  
  if(keyIsPressed){
    if (keyCode === LEFT_ARROW) {
    noFill();
    stroke(0); 
    rect(68,143,70,65,20); 
    }
 }
  
  //botão Frente estrutura  
  if(keyIsPressed){ 
     if (keyCode === RIGHT_ARROW) {
    noFill();
    stroke(0); 
    rect(148,143,70,65,20); 
      }
     } 
 
  //botão defesa estrutura  
  if(keyIsPressed){
    if(key === "s"){
    noFill();
    stroke(0); 
    rect(148,230,70,65,20); 
    }
  }
  
   //botão Ataque estrutura  
  if(keyIsPressed){
    if(key === 'a'){
    noFill();
    stroke(0); 
    rect(64,230,70,65,20); 
       }
     } 

     //botão pular estrutura  
  if(keyIsPressed){
    if(key ===" "){  
    noFill();
    stroke(0); 
    rect(62,314,205,65,20); 
    }
  }
  
       //botão enter estrutura  
  if(mouseIsPressed){
    fill(173,255,47);
    stroke(0); 
    circle(356,185,30); 
   } 
  
  //botão voltar estrutura
  if (mouseX >= 430 && mouseY >= 340 && mouseX<=528 && mouseY<= 387){
    noFill();
    stroke(0);
    rect(430,340,100,50,10);
       if (mouseIsPressed){
         tela=0;
  } else if(tela===0){
  }
 }   
}

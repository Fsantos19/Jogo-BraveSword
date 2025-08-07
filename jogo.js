function telaJogo(){
  background(imgTelaJogo);
  image(imgPersonagem1,10,280,100,150)
  

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

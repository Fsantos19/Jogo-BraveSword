function config(){
  background(telaConfig);
  image(imgPersoMaga,106,115,70,80);
  image(imgPersoCava, 247,110,70,80);
  image(imgPersoMosq, 390, 110,70,80);
  
  
  
   // configuração do mouse 
    push();
    fill(255);
    circle(mouseX, mouseY, 10);
    pop();
   
  // botões de configuração/ escolha de personagem
  //personagem 1
  if (mouseX >= 105 && mouseY >= 115 && mouseX<=183 && mouseY<= 194){
    noFill();
    stroke(0);
    rect(105,115,80,83,20);
    // personagem 2
  }else if (mouseX >= 247 && mouseY >= 115 && mouseX<=319 && mouseY<= 195){
    noFill();
    stroke(0);
    rect(245,115,80,83,20);
   //personagem 3
  }else if (mouseX >= 390 && mouseY >= 115 && mouseX<=465 && mouseY<= 195){
    noFill();
    stroke(0);
    rect(385,115,85,83,20);
    
    //botão de Voltar
  } else if (mouseX >= 390 && mouseY >= 295 && mouseX<=515 && mouseY<= 357){
    noFill();
    stroke(0);
    rect(385,295,135,65,20);
  if (mouseIsPressed){
    tela=0
  }else if(tela===0){
  }
 }
}
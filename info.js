function telaInfo(){
  background(34,139,34);
  image(imgTelaInfo,500,200,60,60)
  
  //botão de voltar 
  noStroke();
  fill(0,100,0);
  rect(430,340,100,50,10); 
  
    //botão voltar
    fill(173,255,47);
    text("Voltar",440,375);
  
  //texto informativo da pagina
    fill(173,255,47);
    text("Desenvolvido por Fillipe Santos",30,200 );
    text("Utilizado como referencia, videos do canal:",30,120);
    text("Dayana Karoline - Monitoria",30,150); 
    text("* Estudante de CeT UFRN",30,250);
    
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
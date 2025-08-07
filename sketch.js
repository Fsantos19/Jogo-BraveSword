//menu jogo Golden Sword
  let img; // imagem do botão de controles 

  let telaConfig; // imagem da tela de configurações

  let tela = 0;

  let imgTelaInfo; 

  let imgTelaJogo;

  let imgTelaCont;

  let imgPersoMaga;

  let imgPersoCava;

  let imgPersoMosq;
  // variaveis das animações dos personagens 
  let imgPersonagem1;
  let imgPersonagem2;
  let imgPersonagem3;
 // variaveis dos inimigos 
  let imgInimigo1;
  let imgInimigo2;
 //final das variaveis

  function preload() {
    img = loadImage('controle1.png');
     telaConfig = loadImage("persona3.png");
    imgTelaInfo = loadImage("foto.jpg");
    imgTelaJogo = loadImage("Jogo1.png");
    imgTelaCont = loadImage("Control.png");
    imgPersoMaga = loadImage("Idle.png");
    imgPersoCava = loadImage("Idle2.png");
    imgPersoMosq = loadImage("Idle3.png");
    imgPersonagem1 = loadImage("Idle.png");
    imgPersonagem2 = loadImage("Idle2.png");
    imgPersonagem3 = loadImage("Idle3.png");
  }  
  let imageBack; // background
  function setup() {
    createCanvas(600, 450);
    imageBack = loadImage("SampleA.png");
  }
  //draw em loop sempre que abrir essa tela
  function draw() {

    //if tela 0 tela principal 
    if(tela === 0){
      background(imageBack);

      noStroke();

      //texto do nome MENU e fonte
      fill(0,0,0);
      textSize(34);
      textFont('Chalkduster, fantasy');
      text("MENU",260,100);

      //caixa dos botoes  e cores 
      fill(0,128,0);
      rect(225,150,150,50,10);
      rect(190,250,220,50,10);
      rect(495,390,90,50,10);
      rect(60,20,80,50,10);
      image(img,495,390,90,50);

      //texto dos botões e tamanho 
      fill(218,165,32);
      textSize(32);
      text("Jogar",265,185);
      text("Personagens",215,285);
      text("Info",75,55);

      // circulo no mouse para melhor visao do usuario 
      push();
      fill(255);
      circle(mouseX, mouseY, 10);
      pop();

      // estrutura dos botões / botão jogar 
      if (mouseX >= 225 && mouseY>=150 && mouseX<=371 && mouseY<= 197){
        noFill();
        stroke(0);
        rect(225,150,150,50,10);
         if(mouseIsPressed){
             tela=3;
        }
        
      //botão personagens  
      }else if (mouseX >= 190 && mouseY>=250 && mouseX<=410 && mouseY<= 300){
        noFill();
        stroke(0);
        rect(190,250,220,50,10);
           if(mouseIsPressed){
             tela=1;
        }
      
        // botão controles 
      }else if (mouseX >= 495 && mouseY>=390 && mouseX<=588 && mouseY<= 440){
        noFill();
        stroke(0);
        rect(495,390,90,50);
        if(mouseIsPressed){ 
           tela=4; 
        }
     //botão Informações   
       }else if (mouseX >=60 && mouseY>=20 && mouseX<=140 && mouseY<= 70){
        noFill();
        stroke(0);
        rect(60,20,80,50,10);
         if(mouseIsPressed){ 
           tela=2; 
         }
       }
      //if tela personagens
     }else if (tela===1) {
      config();
     
       //if tela Informações
   } else if (tela === 2){
      telaInfo();    
     //if tela Jogo
     }else if (tela === 3){
      telaJogo();    
     //if tela Controles   
     }else if (tela === 4){
      telaControles();        
     }
  }

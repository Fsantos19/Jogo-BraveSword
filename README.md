📘 BraveSword – Documentação da Tela de Jogo
🎮 Nome do Projeto:
BraveSword

🧩 Função: telaJogo()
Essa função é responsável por renderizar a tela principal de jogo do BraveSword. Ela define a interface visual, posiciona o personagem e implementa o botão de retorno ao menu inicial.

🔧 Estrutura da Função
js
Copiar
Editar
function telaJogo(){
  background(imgTelaJogo);
  image(imgPersonagem1,10,280,100,150);
  // ...
}
🖼️ Elementos Visuais:
background(imgTelaJogo);: Define o plano de fundo da tela de jogo com uma imagem.

image(imgPersonagem1,10,280,100,150);: Desenha o personagem principal na tela (posição X:10, Y:280, com largura 100px e altura 150px).

Um círculo branco é desenhado no ponteiro do mouse para indicar a posição atual (circle(mouseX, mouseY, 10);).

🟩 Botão "Voltar":
Desenhado como um botão verde (rect(430,340,100,50,10);) com o texto "Voltar".

Detecta se o mouse está sobre o botão e, caso clicado, muda a variável tela para 0, retornando ao menu inicial.

Lógica do botão:
js
Copiar
Editar
if (mouseX >= 430 && mouseY >= 340 && mouseX <= 528 && mouseY <= 387){
  // realça o botão
  if (mouseIsPressed){
    tela = 0;
  }
}
🧠 Comportamento
Interatividade: A tela responde à posição e clique do mouse para interações básicas (neste caso, voltar ao menu).

Estado do Jogo: A variável tela é usada como controle de navegação entre diferentes telas do jogo.

tela === 0: indica o menu principal.

telaJogo() deve ser chamada quando tela === 1, ou outro valor relacionado ao jogo ativo.

📝 Observações para Expansão
O código atual exibe apenas um personagem e um botão.

Faltam elementos de gameplay, como inimigos, HUD, controles ou lógica de colisão.

Ideal para adicionar futuramente:

Sistema de movimentação do personagem.

Pontuação, vida, e HUD.

Animações e efeitos sonoros.

Outras cenas (ex: inventário, batalhas, mapa).

🧾 Requisitos Técnicos
O código parece estar sendo desenvolvido em p5.js, uma biblioteca JavaScript para arte e jogos interativos.

Imagens como imgTelaJogo e imgPersonagem1 devem estar carregadas via preload().

🗂️ Estrutura de Telas
1. 🕹️ telaJogo()
Arquivo: Jogo.js

Função que desenha a tela principal de gameplay.

Elementos principais:
Fundo: imagem de fundo do jogo (imgTelaJogo)

Personagem 1: exibido em posição fixa na tela (imgPersonagem1)

Cursor: círculo branco segue o mouse

Botão "Voltar": retorna ao menu inicial (muda variável tela para 0)

Trecho relevante:
js
Copiar
Editar
if (mouseX >= 430 && mouseY >= 340 && mouseX<=528 && mouseY<= 387){
  if (mouseIsPressed){
    tela=0;
  }
}
2. 🧙‍♀️ config()
Arquivo: config.js

Função responsável pela tela de configuração, onde o jogador escolhe entre diferentes personagens.

Elementos principais:
Fundo da tela: telaConfig

Três personagens disponíveis:

Maga (imgPersoMaga)

Cavaleiro (imgPersoCava)

Mosqueteiro (imgPersoMosq)

Seleção via mouse: passa o cursor sobre um personagem para destacá-lo

Botão "Voltar": retorna ao menu (muda tela para 0)

Trecho de exemplo:
js
Copiar
Editar
if (mouseX >= 105 && mouseY >= 115 && mouseX<=183 && mouseY<= 194){
  rect(105,115,80,83,20); // Destaque da maga
}
3. 🎮 telaControles()
Arquivo: contro.js

Função que mostra os controles do jogo ao jogador.

Controles destacados:
Seta esquerda: mover para trás

Seta direita: mover para frente

Tecla A: ataque

Tecla S: defesa

Espaço: pular

Enter: interagir/menu

Mouse: botão de voltar

Destaque visual:
Cada tecla pressionada ativa um rect() ou circle() ao redor do botão correspondente na interface.

🧠 Lógica de Navegação
O jogo utiliza uma variável de controle de telas chamada tela, que define qual função será chamada no draw().

Valor de tela	Função Correspondente
0	Menu principal (não incluído nos arquivos enviados)
1	telaJogo()
2	config()
3	telaControles()

📁 Recursos Utilizados
Imagens:

imgTelaJogo, imgPersonagem1

imgPersoMaga, imgPersoCava, imgPersoMosq

imgTelaCont

Biblioteca: p5.js

🔧 Possíveis Melhorias Futuras
Implementar animação/movimentação dos personagens

Adicionar colisões, inimigos e pontuação

Criar um sistema de escolha e confirmação de personagem

Criar o menu principal (caso ainda não exista)

Adicionar sons e música

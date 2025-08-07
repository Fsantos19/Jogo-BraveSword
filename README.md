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

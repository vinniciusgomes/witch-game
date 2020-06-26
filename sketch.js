let imagemCenario_1;
let imagemCenario_2;
let imagemCenario_3;
let imagemCenario_4;
let imagemCenario_5;

let imagemPersonagem;
let imagemInimigo;
let imagemTroll;
let imagemTrollFeio;
let imagemGotinhaVoadora;
let matrizGotinha;

let matrizPersonagem;
let matrizTroll;
let matrizTrollFeio;
let matrizGotinhaVoadora;

let somPulo;
let somInicio;
let somGameOver;

let imagemGameOver;
let imagemTelaInicial;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoGotinhaVoadora;
let inimigoTrollFeio;

let controladorInimigo;
let controladorPontuacao;
let controladorGame;

function preload() {
  imagemCenario_1 = loadImage('imagens/cenario/BG_Decor.png');
  imagemCenario_2 = loadImage('imagens/cenario/Foreground.png');
  imagemCenario_3 = loadImage('imagens/cenario/Middle_Decor.png');
  imagemCenario_4 = loadImage('imagens/cenario/Sky.png');
  imagemCenario_5 = loadImage('imagens/cenario/Ground.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemTrollFeio = loadImage('imagens/inimigos/troll_01_andando.png');
  imagemGotinhaVoadora = loadImage('imagens/inimigos/dropy-flying.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/game-over-sound-effect.mp3');
  somInicio = loadSound('sons/somInicio.mp3');
  imagemTelaInicial = loadImage('imagens/assets/tela-inicial.png');
}

function setup() {
  introSetup()
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario([imagemCenario_1, imagemCenario_2, imagemCenario_3, imagemCenario_4, imagemCenario_5], 3);

  matrizGotinha = new MatrizPersonagem(104, 104, 4, 4);
  inimigo = new Inimigo(matrizGotinha, imagemInimigo, width - 52, height - 85, 52, 52, 104, 104, false, 8);

  matrizTroll = new MatrizPersonagem(480, 480, 5, 6, 28);
  inimigoTroll = new Inimigo(matrizTroll, imagemTroll, width, height - 190, 200, 200, 480, 480, false, 8);

  matrizGotinhaVoadora = new MatrizPersonagem(200, 150, 3, 6, 16);
  inimigoGotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, height - 270, 100, 75, 200, 150, true, 8);

  matrizTrollFeio = new MatrizPersonagem(822, 557, 7, 1);
  inimigoTrollFeio = new Inimigo(matrizTrollFeio, imagemTrollFeio, width, height - 570 / 3, 822 / 3, 557 / 3, 822, 557, false, 8);

  controladorInimigo = new ControladorInimigo([inimigo, inimigoTroll, inimigoGotinhaVoadora, inimigoTrollFeio]);

  matrizPersonagem = new MatrizPersonagem(220, 270, 4, 4);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 15, height - 170, 110, 135, 220, 270);

  frameRate(40);
  controladorGame = new ControladorGame();
  controladorPontuacao = new ControladorPontuacao();
}

function introSetup() {
  somInicio.loop();
}

function draw() {
  if (controladorGame.status == 0) {
    image(imagemTelaInicial, 0, 0, width, height);
  } else {
    cenario.exibe();
    controladorPontuacao.exibe();


    cenario.exibeGrama();

    controladorInimigo.exibe();

    personagem.exibe();
    personagem.aplicaGravidade();

    if (personagem.estaColidindo(controladorInimigo.inimigo)) {
      controladorGame.alteraStatus(3);
      gameOver();
      noLoop();
    }

    controladorPontuacao.adicionarPonto();
    controladorInimigo.move();

    cenario.move();
  }
}

function keyPressed() {
  if (key === 'ArrowUp' || key === ' ') {
    personagem.pula(somPulo);
  } else if (key === 'Enter' && controladorGame.status == 0) {
    controladorGame.alteraStatus(1);
    somInicio.stop();
    somDoJogo.loop();
  } else if (key === "Enter" && controladorGame.status == 3) {
    window.location.reload();
  }
}

function gameOver() {
  background('rgba(0%,0%,0%,.80)');
  fill("fff");
  image(imagemGameOver, width / 2 - 412 / 2, height / 2 - 78 / 2);
  somDoJogo.stop()
  somGameOver.play();
  somGameOver.setVolume(0.1, 0.1)
  textAlign(CENTER)
  textSize(32);
  text("Pressione ENTER para tentar novamente.", width / 2, height / 2 + 150)
  fimDeJogo = true;
}
function preload() {
  // Scenes
  imagemCenario_1 = loadImage("assets/images/cenario/BG_Decor.png");
  imagemCenario_2 = loadImage("assets/images/cenario/Foreground.png");
  imagemCenario_3 = loadImage("assets/images/cenario/Middle_Decor.png");
  imagemCenario_4 = loadImage("assets/images/cenario/Sky.png");
  imagemCenario_5 = loadImage("assets/images/cenario/Ground.png");
  imagemTelaInicial = loadImage("assets/images/assets/tela-inicial.png");
  imagemGameOver = loadImage("assets/images/assets/game-over.png");
  // Characters
  imagemPersonagem = loadImage("assets/images/personagem/witch.png");
  imagemInimigo = loadImage("assets/images/inimigos/gotinha.png");
  imagemTroll = loadImage("assets/images/inimigos/troll.png");
  imagemTrollFeio = loadImage("assets/images/inimigos/troll_01_andando.png");
  imagemGotinhaVoadora = loadImage("assets/images/inimigos/dropy-flying.png");
  // Sounds
  somDoJogo = loadSound("assets/sounds/soundtrack.mp3");
  somPulo = loadSound("assets/sounds/jump.mp3");
  somGameOver = loadSound("assets/sounds/gameOver.mp3");
  somInicio = loadSound("assets/sounds/start.mp3");
}

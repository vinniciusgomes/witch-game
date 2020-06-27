function setup() {
  introSetup();
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(
    [
      imagemCenario_1,
      imagemCenario_2,
      imagemCenario_3,
      imagemCenario_4,
      imagemCenario_5,
    ],
    3
  );

  matrizGotinha = new characterMatrix(104, 104, 4, 4);
  inimigo = new Inimigo(
    matrizGotinha,
    imagemInimigo,
    width - 52,
    height - 85,
    52,
    52,
    104,
    104,
    false,
    8
  );

  matrizTroll = new characterMatrix(480, 480, 5, 6, 28);
  inimigoTroll = new Inimigo(
    matrizTroll,
    imagemTroll,
    width,
    height - 190,
    200,
    200,
    480,
    480,
    false,
    8
  );

  matrizGotinhaVoadora = new characterMatrix(200, 150, 3, 6, 16);
  inimigoGotinhaVoadora = new Inimigo(
    matrizGotinhaVoadora,
    imagemGotinhaVoadora,
    width,
    height - 270,
    100,
    75,
    200,
    150,
    true,
    8
  );

  matrizTrollFeio = new characterMatrix(822, 557, 7, 1);
  inimigoTrollFeio = new Inimigo(
    matrizTrollFeio,
    imagemTrollFeio,
    width,
    height - 570 / 3,
    822 / 3,
    557 / 3,
    822,
    557,
    false,
    8
  );

  controladorInimigo = new ControladorInimigo([
    inimigo,
    inimigoTroll,
    inimigoGotinhaVoadora,
    inimigoTrollFeio,
  ]);

  matrizPersonagem = new characterMatrix(220, 270, 4, 4);
  personagem = new Personagem(
    matrizPersonagem,
    imagemPersonagem,
    15,
    height - 170,
    110,
    135,
    220,
    270
  );

  frameRate(40);
  controladorGame = new ControladorGame();
  controladorPontuacao = new ControladorPontuacao();
}

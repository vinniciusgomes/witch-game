class ControladorPontuacao {

  constructor() {
    this.pontuacao = 0;
  }

  exibe() {
    textAlign(RIGHT);
    fill('#FFF');
    textSize(50);
    text(parseInt(this.pontuacao), width - 10, 50);
  }

  adicionarPonto() {
    this.pontuacao += 0.05;
  }

  adicionarPontuacao(pontos) {
    this.pontuacao += pontos;
  }
}
class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    posicaoX,
    posicaoY,
    larguraPersonagem,
    alturaPersonagem,
    larguraSprite,
    alturaSprite
  ) {
    super(
      matriz,
      imagem,
      posicaoX,
      posicaoY,
      larguraPersonagem,
      alturaPersonagem,
      larguraSprite,
      alturaSprite
    );

    this.alturaInicial = posicaoY;
    this.velocidadePulo = 0;
    this.gravidade = 3;
    this.pulos = 2;
  }

  pula(somPulo) {
    if (this.pulos > 0) {
      somPulo.play();
      this.velocidadePulo = -33;
      this.pulos--;
    }
  }

  aplicaGravidade() {
    this.posicaoY += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if (this.posicaoY > this.alturaInicial) {
      this.posicaoY = this.alturaInicial;
      this.pulos = 2;
    }
  }

  estaColidindo(inimigo) {
    return collideCircleCircle(
      this.posicaoX + this.larguraPersonagem / 2,
      this.posicaoY + this.alturaPersonagem / 2,
      this.larguraPersonagem * 0.9,
      inimigo.posicaoX + inimigo.larguraPersonagem / 2,
      inimigo.posicaoY + inimigo.alturaPersonagem / 2,
      inimigo.larguraPersonagem / 2
    );
  }
}

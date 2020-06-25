class Animacao {
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
    this.imagem = imagem;
    this.larguraPersonagem = larguraPersonagem;
    this.alturaPersonagem = alturaPersonagem;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
    this.matriz = matriz;
    this.frameAtual = 0;
  }

  exibe() {
    image(
      this.imagem,
      this.posicaoX,
      this.posicaoY,
      this.larguraPersonagem,
      this.alturaPersonagem,
      this.matriz.posicaoX(this.frameAtual),
      this.matriz.posicaoY(this.frameAtual),
      this.larguraSprite,
      this.alturaSprite
    );
    this.anima();
  }

  anima() {
    this.frameAtual++;
    if (this.frameAtual >= this.matriz.length) {
      this.frameAtual = 0;
    }
  }
}

class Inimigo extends Animacao {
  constructor(
    matriz,
    imagem,
    posicaoX,
    posicaoY,
    larguraPersonagem,
    alturaPersonagem,
    larguraSprite,
    alturaSprite,
    isVoador,
    velociadeMinima
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
    this.velocidadeMinima = velociadeMinima;
    this.velocidade = velociadeMinima;
    this.isVoador = isVoador;
  }

  move() {
    this.posicaoX -= this.velocidade;
  }

  saiuDaTela() {
    return this.posicaoX < -this.larguraPersonagem;
  }

  mudaVelocidade() {
    this.velocidade = Math.floor(Math.random() * 12) + this.velocidadeMinima;
  }
}

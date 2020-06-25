class ControladorInimigo {
  constructor(listaInimigo) {
    //console.log('Criou controlador');
    this.listaInimigo = listaInimigo;
    this.inimigo = this.sorteiaInimigo();
  }

  obtemInimigo() {
    return this.inimigo;
  }

  move() {
    this.inimigo.move();
    if (this.inimigo.saiuDaTela()) {
      this.inimigo = this.sorteiaInimigo();
      this.inimigo.posicaoX = width;
      this.inimigo.mudaVelocidade();
      if (this.inimigo.isVoador) {
        this.inimigo.posicaoY =
          height - (Math.floor(Math.random() * 250) + 100);
      }
    }
  }

  sorteiaInimigo() {
    return this.listaInimigo[
      Math.floor(Math.random() * this.listaInimigo.length)
    ];
  }

  exibe() {
    this.inimigo.exibe();
  }
}

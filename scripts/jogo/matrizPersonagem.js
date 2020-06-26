class MatrizPersonagem {
  constructor(larguraFrame, alturaFrame, totalColunas, totalLinhas, numElementos, debug) {
    this.larguraFrame = larguraFrame;
    this.alturaFrame = alturaFrame;
    this.totalColunas = totalColunas;
    this.totalLinhas = totalLinhas;
    this.length = numElementos || this.totalColunas * this.totalLinhas;
    this.debug = debug || false;
  }

  posicaoX(frameAtual) {
    let colunaAtual = parseInt((frameAtual % this.totalColunas), 10);
    let posicaoInicialX = (colunaAtual * this.larguraFrame);
    if (this.debug) {
      console.log('Frame: ' + frameAtual + '; Col: ' + colunaAtual + '; PosX: ' + posicaoInicialX);
    }
    return posicaoInicialX;
  }

  posicaoY(frameAtual) {
    let linhaAtual = parseInt(frameAtual / this.totalColunas, 10);
    let posicaoInicialY = (linhaAtual * this.alturaFrame);
    if (this.debug) {
      console.log('Frame: ' + frameAtual + '; Lin: ' + linhaAtual + '; PosY: ' + posicaoInicialY);
    }
    return posicaoInicialY;
  }
}
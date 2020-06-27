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
  if (key === "ArrowUp" || key === " ") {
    personagem.pula(somPulo);
  } else if (key === "Enter" && controladorGame.status == 0) {
    controladorGame.alteraStatus(1);
    somInicio.stop();
    somDoJogo.loop();
  } else if (key === "Enter" && controladorGame.status == 3) {
    window.location.reload();
  }
}

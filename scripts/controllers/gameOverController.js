function gameOver() {
  background("rgba(0%,0%,0%,.80)");
  fill("fff");
  image(imagemGameOver, width / 2 - 412 / 2, height / 2 - 78 / 2);
  somDoJogo.stop();
  somGameOver.play();
  somGameOver.setVolume(0.1, 0.1);
  textAlign(CENTER);
  textSize(32);
  text("Pressione ENTER para tentar novamente.", width / 2, height / 2 + 150);
  fimDeJogo = true;
}

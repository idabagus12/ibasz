document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('tetris');
  const context = canvas.getContext('2d');

  context.scale(20, 20);

  function arenaSweep() {
    // ...
  }

  function collide(arena, player) {
    // ...
  }

  function createMatrix(w, h) {
    // ...
  }

  function createPiece(type) {
    // ...
  }

  function draw() {
    // ...
  }

  function drawMatrix(matrix, offset) {
    // ...
  }

  function merge(arena, player) {
    // ...
  }

  function playerDrop() {
    // ...
  }

  function playerMove(dir) {
    // ...
  }

  function playerReset() {
    // ...
  }

  function playerRotate(dir) {
    // ...
  }

  function update() {
    // ...
  }

  const colors = [
    // ...
  ];

  const arena = createMatrix(12, 20);

  const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0,
  };

  function updateScore() {
    // ...
  }

  function togglePause() {
    // ...
  }

  function restartGame() {
    // ...
  }

  document.addEventListener('keydown', (event) => {
    // ...
  });

  document.getElementById('pause').addEventListener('click', togglePause);
  document.getElementById('restart').addEventListener('click', restartGame);

  playerReset();
  update();
});
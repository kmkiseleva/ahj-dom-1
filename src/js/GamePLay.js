export default class GamePlay {
  constructor(container) {
    this.container = container;
    this.boardSize = 4;
    this.cells = [];
    this.currentPosition = null;
  }

  init() {
    this.drawField();
    setInterval(() => {
      this.generateGoblin();
    }, 1500);
  }

  drawField() {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }

    this.cells = [...gameBoard.children];
    this.container.appendChild(gameBoard);
  }

  generateGoblin() {
    const randomCellIndex = Math.floor(Math.random() * this.cells.length);
    if (randomCellIndex === this.currentPosition) {
      this.generateGoblin();
      return;
    }
    this.removeGoblin();

    this.currentPosition = randomCellIndex;

    const cellWithGoblin = document.createElement('div');
    cellWithGoblin.classList.add('cell-with-goblin');
    this.cells[randomCellIndex].appendChild(cellWithGoblin);
  }

  removeGoblin() {
    if (this.currentPosition === null) {
      return;
    }

    this.cells[this.currentPosition].firstChild.remove();
  }
}

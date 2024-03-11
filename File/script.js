const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let combo of winningCombinations) {
    if (cells[combo[0]].textContent === currentPlayer &&
        cells[combo[1]].textContent === currentPlayer &&
        cells[combo[2]].textContent === currentPlayer) {
      message.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
      return;
    }
  }
  if ([...cells].every(cell => cell.textContent !== '')) {
    message.textContent = "It's a draw!";
    gameActive = false;
  }
}

function handleClick(index) {
  if (!gameActive || cells[index].textContent !== '') return;
  cells[index].textContent = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  cells.forEach(cell => cell.textContent = '');
  message.textContent = '';
  currentPlayer = 'X';
  gameActive = true;
}

const cells = document.getElementsByClassName('cell');
let currentCell;

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
}

setInterval(() => {
  if (currentCell !== undefined) {
    currentCell.classList.remove('cell__active');
  }
  let cell = cells[getRandomInt(0, cells.length)];
  while (cell === currentCell) {
    cell = cells[getRandomInt(0, cells.length)];
  }
  currentCell = cell;
  cell.classList.add('cell__active');
}, 1500);

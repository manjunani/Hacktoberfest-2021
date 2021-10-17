var origBoard;
let player1;
let player2;
let player;
let choicesIndex;
let gameOver;

let currentYear = new Date().getFullYear();
document.getElementById("copyright-year").innerHTML = currentYear;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const cells = document.querySelectorAll(".cell");

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function home() {
  document.getElementById("table-container").style.display = "none";
  document.getElementById("startPage").style.display = "flex";
  document.getElementById("endPage").style.display = "none";
}

function startSinglePlayer() {
  document.getElementById("table-container").style.display = "flex";
  document.getElementById("whoStarts").style.display = "none";
  choicesIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  gameOver = false;
  origBoard = Array.from(Array(9).keys());

  if (document.getElementById("Computer").checked) {
    // computerFirst();
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
      cells[i].classList.remove("won");
      cells[i].addEventListener("click", turnClick, false);
    }
    computersTurn();
  } else {
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
      cells[i].classList.remove("won");
      cells[i].addEventListener("click", turnClick, false);
    }
  }
}

function startGame() {
  if (document.getElementById("X").checked) {
    player1 = "X";
    player2 = "O";
  } else {
    player1 = "O";
    player2 = "X";
  }
  if (document.getElementById("onePlayer").checked) {
    document.getElementById("endPage").style.display = "none";
    document.getElementById("whoStarts").style.display = "flex";
    document.getElementById("startPage").style.display = "none";
    return;
  }
  choicesIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  gameOver = false;
  document.getElementById("table-container").style.display = "flex";
  document.getElementById("startPage").style.display = "none";
  document.getElementById("endPage").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].classList.remove("won");
    cells[i].addEventListener("click", turnClick, false);
  }
}
function turnClick(cell) {
  turn(cell.target.id);
}

function computerFirst() {
  document.getElementById("table-container").style.display = "flex";
  document.getElementById("whoStarts").style.display = "none";
  computersTurn();
  origBoard = Array.from(Array(9).keys());
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].classList.remove("won");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turn(cellId) {
  if (document.getElementById("twoPlayers").checked) {
    if (player === player1) {
      player = player2;
    } else {
      player = player1;
    }
  } else {
    player = player1;
  }
  playSound(player);
  choicesIndex = choicesIndex.filter((item) => item !== parseInt(cellId));
  origBoard[cellId] = player;
  document.getElementById(cellId).innerText = player;
  document
    .getElementById(cellId)
    .removeEventListener("click", turnClick, false);
  checkBoard();
  if (!gameOver && document.getElementById("onePlayer").checked) {
    computersTurn();
  }
}

function computersTurn() {
  if (choicesIndex.length > 0) {
    const choice = minimax(origBoard, player2).index;
    origBoard[choice] = player2;
    document.getElementById(choice).innerText = player2;
    choicesIndex = choicesIndex.filter((item) => item !== choice);
    document
      .getElementById(choice)
      .removeEventListener("click", turnClick, false);
  }
  checkBoard();
}

function checkBoard() {
  for (var i = 0; i < 8; i++) {
    let comboToCheck = winCombos[i];
    let presentCombo = [];

    for (var j = 0; j < 3; j++) {
      presentCombo.push(origBoard[comboToCheck[j]]);
    }
    const allEqual = (arr) => arr.every((v) => v === arr[0]);
    if (allEqual(presentCombo)) {
      comboToCheck.forEach(function (index) {
        document.getElementById(index).classList.add("won");
      });
      gameOver = true;
      choicesIndex.forEach(function (index) {
        document
          .getElementById(index)
          .removeEventListener("click", turnClick, false);
      });
      document.getElementById("endPage").style.display = "flex";
      if (presentCombo[0] !== player1) {
        playSound("lost");

        if (document.getElementById("twoPlayers").checked) {
          document.getElementById("winMessage").innerHTML = "Player 2 wins!";
        } else {
          document.getElementById("winMessage").innerHTML = "Computer wins!";
        }
      } else {
        document.getElementById("winMessage").innerHTML = "You win!";
      }

      break;
    }
    if (choicesIndex.length === 0 && !gameOver) {
      gameOver = true;
      document.getElementById("endPage").style.display = "flex";
      document.getElementById("winMessage").innerHTML = "DRAW!";
    }
  }
}

function emptyIndexies(board) {
  return board.filter((s) => s != "O" && s != "X");
}

function winning(board, player) {
  for (var i = 0; i < 8; i++) {
    let comboToCheck = winCombos[i];
    let presentCombo = [];

    for (var j = 0; j < 3; j++) {
      presentCombo.push(board[comboToCheck[j]]);
    }
    const allEqual = (arr) => arr.every((v) => v === arr[0]);
    if (allEqual(presentCombo)) {
      if (presentCombo[0] === player) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function minimax(currentBoard, player) {
  var availSpots = emptyIndexies(currentBoard);
  if (winning(currentBoard, player1)) {
    return { score: -10 };
  } else if (winning(currentBoard, player2)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }
  var moves = [];

  for (var i = 0; i < availSpots.length; i++) {
    var move = {};
    move.index = currentBoard[availSpots[i]];
    currentBoard[availSpots[i]] = player;
    if (player == player2) {
      move.score = minimax(currentBoard, player1).score;
    } else {
      move.score = minimax(currentBoard, player2).score;
    }

    currentBoard[availSpots[i]] = move.index;
    moves.push(move);
  }
  var bestMove;
  if (player === player2) {
    var bestScore = -Infinity;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    var bestScore = Infinity;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

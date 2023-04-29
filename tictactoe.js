// Define the game board
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// Define the current player (X goes first)
var currentPlayer = "X";

// Function to make a move
function makeMove(row, col) {
  // Check if the cell is already occupied
  if (board[row][col] !== "") {
    alert("That cell is already occupied!");
    return;
  }
  
  // Make the move
  board[row][col] = currentPlayer;
  
  // Check for a win or tie
  if (checkWin() || checkTie()) {
    alert("Game over!");
    resetGame();
  } else {
    // Switch to the other player
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
  }
  
  // Update the game board display
  displayBoard();
}

// Function to check for a win
function checkWin() {
  // Check rows
  for (var row = 0; row < 3; row++) {
    if (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][0] !== "") {
      return true;
    }
  }
  
  // Check columns
  for (var col = 0; col < 3; col++) {
    if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== "") {
      return true;
    }
  }
  
  // Check diagonals
  if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "")) {
    return true;
  }
  
  // No win
  return false;
}

// Function to check for a tie
function checkTie() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        // Empty cell, game is not over yet
        return false;
      }
    }
  }
  
  // All cells are occupied, game is a tie
  return true;
}

// Function to reset the game
function resetGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer = "X";
  displayBoard();
}

// Function to display the game board
function displayBoard() {
  var boardElem = document.getElementById("board");
  var html = "";
  
  // Generate HTML for the board
  for (var row = 0; row < 3; row++) {
    html += "<div class='row'>";
    for (var col = 0; col < 3; col++) {
      html += "<div class='cell' onclick='makeMove(" + row + "," + col + ")'>" + board[row][col] + "</div>";
    }
    html += "</div>";
  }
  
  // Update the board display
  boardElem.innerHTML = html;
}

// Initialize the game board display
displayBoard();

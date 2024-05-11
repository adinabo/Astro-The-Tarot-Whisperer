var errors = 0;
var cardList = [
    "chariot",
    "death",
    "devil",
    "emperor",
    "empress",
    "fool",
    "hanged-man",
    "hermit",
    "judgement",
    "justice"
]

var cardSet;
var board = [];
var rows = 4;
var columns =5;

var card1Selected;
var card2Selected;

window.onload = function() {
    startGame(); // Call startGame function on page load
}

function startGame() {
    shuffleCards();
    createBoard();
}

/**
 * This function shuffles the deck
 */
function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function createBoard() {
    document.getElementById("board").innerHTML = "";
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);
            let card = document.createElement("img");
            let path = "assets/images/";
            card.id = r.toString() + "-" + c.toString();
            card.src = path + cardImg + ".jpg";
            console.log('card: ', card.src);
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 2500);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "assets/images/back.jpeg";
        }
    }
}

function selectCard() {
  if (this.src.includes("back")) {
      if (!card1Selected) {
          card1Selected = this;

          let coords = card1Selected.id.split("-"); //"0-1" -> ["0", "1"]
          let r = parseInt(coords[0]);
          let c = parseInt(coords[1]);
          let path = "assets/images/";

          card1Selected.src = path + board[r][c] + ".jpg";
      }
      else if (!card2Selected && this != card1Selected) {
          card2Selected = this;

          let coords = card2Selected.id.split("-"); //"0-1" -> ["0", "1"]
          let r = parseInt(coords[0]);
          let c = parseInt(coords[1]);
          let path = "assets/images/";

          card2Selected.src = path + board[r][c] + ".jpg";
          setTimeout(update, 1000);
      }
  }
}

function update() {
    //if cards aren't the same, flip both back
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "assets/images/back.jpeg";
        card2Selected.src = "assets/images/back.jpeg";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    }
    else {
        // Check if all cards have been matched
        if (allCardsMatched()) {
            endGame();
        }
    }

    card1Selected = null;
    card2Selected = null;
}

function allCardsMatched() {
    // Iterate through the board array and check if any card is still facing down
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            if (card.src.includes("back")) {
                return false; // If any card is facing down, return false
            }
        }
    }
    return true; // If all cards are matched, return true
}

function endGame() {
    // Perform end-game actions here
    alert("Congratulations! You've matched all the cards! Click 'Start Game' to play again");
}

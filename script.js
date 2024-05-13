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
/*
window.onload = function() {
    startGame(); // Call startGame function on page load
} */

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

/**
 * This function creates the board and shows the cards for 2.5 seconds
 */
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

/**
 * This function hides the cards
 */
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "assets/images/back.jpeg";
        }
    }
}

/**
 * This function selects the cards and flips them
 */
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

/**
 * This function flips the cards back if they aren't the same
 */
function update() {

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

/**
 * Function below iterates through the board array and checks if any card is still facing down
 */
function allCardsMatched() {
    
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

/**
 *  Function below displays a message when the user has finished matching all cards
 */

function endGame() {

    alert("Congratulations! You've matched all the cards! Click 'Start Game' to play again");
    errors = 0;
    document.getElementById("errors").innerText = errors;
}


/*the code below (for creting the stars) was taken from the following source:
 https://codepen.io/psyloute/pen/PoXmqym*******/
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  // Select stars
  const stars = document.querySelectorAll('.star');
  // Random position for each star
  stars.forEach((star, index) => {
  // The function passed to forEach will be executed for each "star" element.
    // star represents the current element in the loop
    // index represents the index of the current element in the array (0 for the first element, 1 for the second, etc.
    const top = getRandom(0, 100) + 'vh';
    const left = getRandom(0, 100) + 'vw';
    const delay = getRandom(0, 15) + 's';
  
    star.style.top = top;
    star.style.left = left;
    star.style.animationDelay = delay;
  })
  /****************************************************************************** */
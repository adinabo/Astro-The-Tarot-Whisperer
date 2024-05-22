let errors = 0;
let cardList = [
    "chariot",
    "death",
    "devil",
    "emperor",
    "empress",
    "fool",
    "hanged-man",
    "hermit",
    "judgement",
    "justice"];

let cardSet;
let board = [];
let rows = 4;
let columns = 5;

let card1Selected;
let card2Selected;

/**
 * This function starts the game when pressing "start game" button and hides
 * the end game congrats message
 */
function startGame() {
    let endGameMessage = document.getElementById("endGameMessage");
    endGameMessage.classList.add("hidden");
    errors = 0;
    document.getElementById("errors").innerText = errors;
    cardSet = [];
    board = [];
    card1Selected = null;
    card2Selected = null;
    shuffleCards();
    createBoard();
}

/**
 * This function shuffles the deck
 */
function shuffleCards() {
    cardSet = cardList.concat(cardList); // Create a pair for each card
    for ( let i = cardSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardSet[i], cardSet[j]] = [cardSet[j], cardSet[i]]; // Swap elements
    }
}

/**
 * This function creates the board and shows the cards for 2.5 seconds
 */
function createBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = ""; // Clear the board
    board = []; // Reset the board array

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = `assets/images/${cardImg}.jpg`;
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            boardElement.append(card);
        }
        board.push(row);
    }

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
            flipCard(card1Selected);
        } else if (!card2Selected && this !== card1Selected) {
            card2Selected = this;
            flipCard(card2Selected);
            setTimeout(update, 1000);
        }
    }
}

/**
 * This function flips a card
 */
function flipCard(card) {
    let coords = card.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    card.src = `assets/images/${board[r][c]}.jpg`;
}

/**
 * This function flips the cards back if they aren't the same
 */
function update() {
    if (card1Selected.src !== card2Selected.src) {
        card1Selected.src = "assets/images/back.jpeg";
        card2Selected.src = "assets/images/back.jpeg";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    } else {
        if (allCardsMatched()) {
            endGame();
        }
    }
    card1Selected = null;
    card2Selected = null;
}

/**
 * Function below iterates through the board array and checks
 * if any card is still facing down
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
 * Function below displays a message when the user
 * has finished matching all cards
 */
function endGame() {
    var endGameMessage = document.getElementById("endGameMessage");
    endGameMessage.classList.remove("hidden");
    errors = 0;
    document.getElementById("errors").innerText = errors;
}

// The code for creating the stars remains unchanged
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
    const top = getRandom(0, 100) + "vh";
    const left = getRandom(0, 100) + "vw";
    const delay = getRandom(0, 15) + "s";
    star.style.top = top;
    star.style.left = left;
    star.style.animationDelay = delay;
});

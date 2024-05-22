# Astro - The Tarot Whisperer
https://adinabo.github.io/Astro-The-Tarot-Whisperer/

Astro is an engaging and simple card-matching game where players are tasked with finding matching pairs of tarot cards. In this game, a selection of 10 unique tarot cards is duplicated, creating a total of 20 cards that players must match. The objective is to identify and match all pairs of cards.

Each game session starts with these 20 cards being thoroughly shuffled to ensure a unique and unpredictable arrangement, making every game a new and exciting challenge. Players will need to use their memory and concentration skills to remember the positions of the cards as they flip them over, aiming to find all matching pairs with as few mistakes as possible.

![Responsiveness](/assets/images/responsive.jpg)


Initially, my plan was to create a tarot reading website (initial wireframes below), but I decided that for this project it would be better to experiment with JavaScript and develop a simple and fun game using tarot cards.

![Inital wireframes](/assets/images/wireframe1.jpg)

## Features

- **Matching pairs of tarot cards:** Test your memory by finding matching tarot cards.
- **Simple and intuitive gameplay:** Easy to understand and play for all ages.
- **Fun and engaging:** Keeps players entertained with its magical theme.
- **"Start Game" button:** Resets the game to start a new session.
- **Error counter:** Tracks the number of incorrect matches and resets with each new game.
- **Sparkling stars background:** Adds a magical touch to the game’s atmosphere.

## How to Play

To start the game, the user will press the the Start Game button.

1. **Click to Reveal:** Click on a card to unveil its mystical symbol. Each card holds a unique image representing a facet of the tarot's wisdom. Take your time to absorb the energy of each card as it is revealed.
2. **Match the Symbols:** Click on another card to find its match. Use your memory to remember the positions of previously revealed cards.
3. **Find all Pairs:** Continue flipping cards and finding matching pairs until all cards are matched.
4. **Keep Track of Errors:** Each time you mismatch cards, the error counter will update, helping you track your progress.
5. **Restart the Game:** Click the "Start Game" button to reset the game and start a new round.

Each time the user matches the wrong cards, the error count will be updated to reflect the total number of errors.

When the user has successfully matched all the cards, a message will be displayed.

## Technologies Used

- HTML
- CSS
- JavaScript
- Figma for Wireframes
- Microsoft Designer for AI generated images
- Git and Github for version control

## Installation

To install the game locally, follow these steps:

1. Clone the repository using the following command:

git clone https://github.com/adinabo/Astro-The-Tarot-Whisperer

2. Open the project folder and open index.html in your preferred browser.

## Deployment

The website was successfully deployed to GitHub. Steps to deploy it:

1. Go to the **Settings** tab in the GitHub repository.

2. Scroll down to **GitHub Pages** and click on **"Check it out here!"**

3. Make sure to choose **"main"** under **"Source"**.

4. The page will automatically refresh, showing a detailed ribbon display confirming the deployment.

The live site can be found at the following link: https://github.com/adinabo/Astro-The-Tarot-Whisperer

# Bugs
- Pressing "Start Game" multiple times initially showed different cards but reverted to the first set. This was fixed by resetting the board array correctly each time the game starts.
- Clicking Too Fast: If the player clicks on cards too quickly, the game might not register the selections properly and there is a slight delay.

# Testing
- WS3 HTML Testing Validator
![HTML testing result](/assets/images/test1.jpg)

- CSS 
![CSS testing result](/assets/images/test2.jpg)

- JavaScript
![JavaScript testing result](/assets/images/test3.jpg)

Tests Conducted While Playing the Game:
- **Card Selection Test:** Pressed three and more cards consecutively to verify if the third card would be displayed.
- **Game Reset Test:** Pressed the "Start Game" button multiple times to ensure the cards reset properly each time.
-**Device Compatibility Test:** Played the game on various devices, including a laptop, desktop, iPhone 14, and Samsung S24, confirming that the game displays correctly across all devices. Future UI improvements are noted.
-**Error Counter Test:** Intentionally failed to match the cards several times to check if the error counter accurately updates.


## User Stories

**As a player, I want to be able to click on a card to reveal its symbol, so I can begin playing the game and uncover the hidden symbols.**

**I want to be able to click on another card to reveal its symbol, so I can try to find matching pairs and progress in the game.**

3. **As a player, I want the symbols on matching pairs of cards to stay open, so I can track my progress and remember which cards I've already matched.**

4. **As a player, I want the symbols on non-matching pairs of cards to flip back over, so I can continue searching for matching pairs.**

5. **I want the game to have a visually appealing design and theme, so I can enjoy the experience of playing and immerse myself in the game's atmosphere.**

# Credits

## Content

All content was written by the developer

The source for sparkle https://codepen.io/psyloute/pen/PoXmqym*******/

## Imagery

The background image and the cards were generated with Microsoft Designer AI.

## Code
https://www.freecodecamp.org/ was used to practice JavaScript.

https://www.youtube.com/@codewithbubb and https://www.youtube.com/@KennyYipCoding
tutorials were useful in learning how to create a game.

## Acknowledgements

- My mentor Spencer Barriball for his support and feedback.
- Code Institute's Tutor Support
- Newcastle College

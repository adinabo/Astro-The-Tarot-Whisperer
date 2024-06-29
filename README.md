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

# UX Scope Testing

# Manual Testing
- Principles:
Human Insight: Manual testing leverages human intuition and experience to identify issues that automated tests might overlook.
Flexibility: Manual testers can adapt to changes and explore the game in creative ways, beyond predefined test cases.
User Experience: Manual testing is essential for evaluating the game's user interface and overall user experience.
Exploratory Testing: Manual testers can actively explore the game to uncover unexpected behavior and bugs.

- **Card Selection Test:** 

The objective of this test is to ensure that the game responds correctly when the cards are selected.
- Expected result
I was expecting to see only two cards revealed at the same time, with no errors.
- Steps
Clicked on three or more cards consecutively to check if each card reveals correctly.
Verified that after the second card is selected, unmatched cards are hidden again.
Ensured that matched cards remain visible.

- **Game Reset Test:**
- Objective
To ensure the game resets correctly when the "Start Game" button is pressed.
- Expected result
I was expecting to see the game board and error counter reset correctly upon pressing the "Start Game" button.
- Steps
Started the game and revealed several cards.
Pressed the "Start Game" button.
Verified that the game board is reset and all cards are hidden.
Checked that the error counter is reset to zero.

- **Device Compatibility Test:**
- Objective
 Ensured the game displays and functions correctly on various devices.
- Expected result
As expected, the game is fully functional and visually appealing across all tested devices.
- Steps
Played the game on different devices, such as a laptop, desktop, iPhone 14, and Samsung S24.
Verified that the game layout is responsive and adjusts correctly to different screen sizes.
Checked for any visual or functional issues specific to each device

-**Error Counter Test:** Intentionally failed to match the cards several times to check if the error counter accurately updates.

# Automated Testing

The automated tests below, that I have incorporated, help maintain the technical integrity of the game, ensuring that the codebase is robust and performs well across different devices.

- WS3 HTML Testing Validator
No errors were found when testing HTML file
[W3C Validator](https://validator.w3.org/)
![HTML testing result](/assets/images/test1.jpg)

- CSS 
No errors were found when testing CSS file
[CSS Validator](https://validator.w3.org/)
![CSS testing result](/assets/images/test2.jpg)

- JavaScript
JsLint has returned 2 warning, however no problems with logic or syntax.

[CSS testing result](https://www.jslint.com/)
![JavaScript testing result](/assets/images/test3.jpg)

- Google Lighthouse
The page underwent testing with Google Lighthouse for both desktop and mobile platforms. Despite running the tests without any changes to the page, the Lighthouse results were inconsistent. This inconsistency appeared to be primarily due to layout shifts. Nevertheless, the scores remained acceptable. Through my own testing on various devices, I did not observe significant layout shifts. Even when applying throttling via devtools, there was only a minor layout shift during the initial load, which did not adversely affect the user experience.
![Google Lighthouse desktop performance](/assets/images/desktop_perf.jpg)
![Google Lighthouse mobile performance](/assets/images/mobile_perf.jpg)

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

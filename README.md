# MS2 a memory game "Match a dog" 

"Match a dog" is a win-win card memory game that tests user memory in a fun way. The goal is to match all pairs of identical pictures (cards) as fast as possible with the least amount of guesses. It might also inspire users to support an open source project which provides an API with all dog pictures used in this game.

![mockup](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/demo.png)

Live Website: [here.](https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/)

## Table of Contents
**[User Experience](#UX)** 

**[Features](#Features)**

**[Technologies](#Technologies)**

**[Testing](#Testing)**

**[Deployment](#Deployment)**

**[Bugs](#Bugs)**

**[Credits](#Credits)**

## UX

This project is created for all users who like to play simple memory games. Dog lovers might have an additinal interest as well.

### User Stories

As a user I want to:
* Enjoy the design and navigate through the game intuitively.
* Have a motivation to play the game more than one time.
* Know the game rules explained to me in an easy and short way.
* Know interesting information about the game that encourages me to learn more about Dog API project.
* Test my memory skills in a fun way.
* Have an ability to choose among several difficulty levels.
* Know my results when the game is finished in order to improve them.

### Strategy

The goal is to build a user-friendly and good-looking game with minimum amount of menus and windows for users who like games, dogs and want to have fun.  

### Scope

Features that should be in the project:
* Main menu
* Game rules & description
* About page with motivation to support Dog API
* Difficulty levels
* Timer
* Flip counter
* Game results window
* Dog API pictures generator

### Structure

The game is a single page site with several modals that act as popup windows or menus.
It uses two main <div> elements to separate between main menu area and game area. They become hidden or visible based on certain navigation buttons clicked.  
At first user enters main menu where he/she can start a game with different difficulty levels, read information about an API or read game rules.
After user matched all pairs of cards the modal with final results appears.

### Skeleton

Mockup of the website was created in ["Balsamiq Wireframes"](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/Balsamiq%20Wireframes.pdf).
There were some changes made during creating the game: arrangement of buttons, game cards layout, window with game results.

### Surface

The website has a warm funny look with dog animations in a contrasting juicy colors: soft and light yellow, dark purple for buttons, white and black for text according to evaluated color combination with the help of [COLOR TOOL](https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=ffe16e&secondary.color=6d63ef).
![img](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/Color%20Tool.png)

Dog images are taken from the website [dog.ceo](https://dog.ceo/dog-api/breeds-list), using their free API. 
Image for card cover is a logo of [dog.ceo](https://dog.ceo/) website.  
![img](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/dog-logo-black.png)

The font is Comic Sans MS that gives a fun comic feel and is perfect for a game.

## Features

The website has 2 sections: a Home page and a Game page.
* Home Page has a header and main menu, consisting of 3 buttons:
    * Play button - allows user to open the first modal with the difficulty options:
        * Easy - allows user to load Game Page with 4 pairs of cards.
        * Medium - allows user to load Game Page with 6 pairs of cards.
        * Hard - allows user to load Game Page with 8 pairs of cards.
    * How to play button - allows user to open the second modal with game rules.
    * About button - allows user to open the third modal with description and inspiration of the game. It has a link where the user can check all image collection.

* Game Page has:
    * Game area with number of cards depending on difficulty level where the user can play. Cards are real photos of dogs loaded randomly using dog.ceo API.
      Game area also displays time spent and number of card flips.
    * Button Restart allows the user to return to the modal popup with difficulty options.
    * Button Quit allows the user to return to Home Page.
    * Final modal popup shows results of the game. It opens when game is finished with Play Again button that acts identically as Restart.
    

### Features left to implement
* Saving game results in game memory so users can compare their results.
* Animation of flipping cards for better visualization.
* Make a logic for picking the beast suited dog breed to the user based on his game results: time spent and amount of guesses.

On mobile devices all modals and windows are the same.

## Technologies

### Languages used:

HTML5 - for basic content and structure of the site.  
CSS3 - for design.  
Javascript - logic for the game.  

### Frameworks and libraries used:

[Bootstrap's components](https://getbootstrap.com/) (navbar, buttons, badge, modal) - provides responsive layout.  
[JQuery](https://jquery.com/) - for making the site interactive.  
[Font Awesome](https://fontawesome.com/) - for using icons.  
[Balsamiq](https://balsamiq.com/) - for creating a mockup.  
[Dog API](https://dog.ceo/dog-api/about) - for dog pictures.  

### Tools and Other Resources used:

[Github](https://github.com/) -  for version control and pushing content to repository.  
[Gitpod](https://www.gitpod.io/)  -  for building the site.  
[TinyPNG](https://tinypng.com/) - for reducing the size of images.  
[Wfonts](https://www.wfonts.com/font/comic-sans-ms) - for font of the website.  
[COLOR TOOL](https://material.io/resources/color/) - for color palettes and the accessibility of any color combination for UI.  
[Mockup generator](http://techsini.com/multi-mockup/index.php) - for testing responsive website on various devices.  
[W3 Schools](https://www.w3schools.com/) - for HTML, CSS, JS tips.  
[Stackoverflow](stackoverflow.com) - for finding answers on questions.  
[Jsonformatter](https://jsonformatter.org/scss-to-css) - for transforming SCSS code into CSS code for dog animations.  
[Webformatter](https://webformatter.com/html) - for beautifying HTML, CSS, Javascript codes.

### Codes used:

Some of the code for the game was taken from the sources:
*  [Stackoverflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) - for shuffling game cards.
*  [Stopwatch](https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak) - for implementing timer.
*  [CSS-animation](https://medium.muz.li/inspiring-examples-of-css-animation-2b2a5dd464e0) - for dog animations.

## Testing

The following steps were taken to ensure the website works as intended:
* Ensure that all user stories are achieved:
   * Funny dog animations and bright colors make the design enjoyable, simple menu makes navigation intuitive through the game.
   * New cards every game motivate to play more than one time.
   * There are clear and short game rules.
   * There is an information in About section that encourages the user to learn more about Dog API project.
   * Matching all pairs of identical dog pictures tests user's memory skills in a fun way.
   * There is an ability to choose between three difficulty levels.
   * There is a final popup window with game results (time spent and amount of guesses) in order to improve them.
  
 * Ensure that all features work well: 
   * Home page has a central and responsive header with the name of game, main menu has buttons and dog animation that moves all time. 
   * Clicking the button "How to Play" opens a pop-up windows with instructions of the game and working link to www.dog.ceo. Button "OK" closes pop-up window.
   * Clicking the button "About" opens a pop-up window with description of the game and working link to www.dog.ceo. Button "OK" closes pop-up window.
   * Clicking the button "Play" opens a pop-up window with three difficulty options as buttons:  
       * *"EASY"* button opens a game area with 8 cards;
       * *"MEDIUM"* button opens a game area with 12 cards;
       * *"HARD"* button opens a game area with 16 cards;
   * When game area is opened it has rows of faced down cards, 4 cards in each row. There are timer, guess counter and level name.
   * When user clicks the first card, game begins and countdown timer starts.
   * The flip counter increases by one with each card turned over.
   * All game cards on the game area are face down. When user clicks on card, it flips face up. When user opens 2 cards with different pictures they turn over face down. If user matches the cards they remain face up. The game continues until all cards are revealed (matched). The user can select only 2 cards at a time.
   * The game area has 2 buttons:
       * *"RESTART"* button redirects the user to the modal with difficulty options when clicked, game area is closed;  
       * *"QUIT"* button redirects the user to the home page when clicked, game area is closed;
   * When all cards are matched a pop-up window with results of game opens. The results appear as text with amount time and amount of flips. There is a dog animation below the text that moves all time.
   * A pop-up window with game results has *button "PLAY AGAIN"* that works the same as *button "RESTART"* - redirects the user to the window with difficulty options to begin a new game.

The following online validators have been used for checking the code for any errors or warnings:
* W3C HTML Validator;  
There are no warnings or errors: [link](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdynjashik.github.io%2FMemory-card-game-MsP-2-Interactive-Frontend-Development-%2F)

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdynjashik.github.io%2FMemory-card-game-MsP-2-Interactive-Frontend-Development-%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#errors);  
There are 17 errors and warnings connected to external libraries (Bootstrap, Awesome, hover.css) that I cannot correct.

* JShint looks good:  
![img](https://github.com/Dynjashik/Interactive-Frontend-Development-Milestone-Project-2/blob/c3842f483c8bc96fe45bc94db87c22897596b361/assets/images/Jshint.png)

Lighthouse testing was made in Chrome browser developer tools. 
* Desktop Lighthouse Improved Report:  
![img](https://github.com/Dynjashik/Interactive-Frontend-Development-Milestone-Project-2/blob/c3842f483c8bc96fe45bc94db87c22897596b361/assets/images/LightHouse%20desktop.png)

* Mobile Lighthouse Report:  
![img](https://github.com/Dynjashik/Interactive-Frontend-Development-Milestone-Project-2/blob/c3842f483c8bc96fe45bc94db87c22897596b361/assets/images/Lighthouse%20mobile.png)

The site was tested across different browsers and screen sized to be sure in responsiveness and browser compatibility.: Chrome, Internet Explorer, Safari, Firefox, UC Browser, Opera and Samsung Internet. It was also tested on mobile devices such as: iPhone Xs, iPhone 7, iPhone 11, Xiaomi Redmi Note 9. 


## Deployment

Steps for deploying the website to a hosting platform GitHub Pages:

* Open settings of GitHub [repository](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-) where the project is.
* Scroll down to the GitHub Pages section.
* Select the master branch in the source.
* Refresh the page and return to the GitHub Pages section.
* The website is published at [https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/.](https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/).


## Bugs

During testing the game on mobile devices a bug was discovered. There is a little space (several pixels) between the header and the right side of the screen despite a navbar (bootstrap library) being used for responsive and fluid header. To solve the problem there was an additional style media for each screen size made.
Same was made for game cards to keep the same card number in a row on the mobile version.

Another bug is connected with game cards turning over. If you turn over two cards and quickly click “QUIT” or “RESTART” button a new game opens. But you can’t select any card because there are still two face up cards from the last game. According to the rules of the game, only 2 cards can be selected at a time. 
The problem was in the function setTimeOut() that resets the flip counter in 1 second. If you quit the game faster the flip counter wouldnt't have time to reset. The solution of the bug was to reset the counter when the button with the game's level is clicked.

During testing the game in online community “Slack” the bug was discovered that game card images are being stretched. One of the users recommended me to use object-fit: cover; under the img css properties to fix it.

During testing the game on iPhone 6 the bug was discovered that the header content is not centered. There was an additional margin on the right side. The bug esd solved by changin margin property to margin: auto; 

## Credits

### Contents

All content is written by developer Darya Belarusik.

### Media

Dog images used in this game were obtained from the website [dog.ceo](https://dog.ceo/dog-api/breeds-list) that provides free access to the Dog API (Original dataset taken from the the Stanford Dogs Dataset).
A card cover is a logo of [the same source](https://dog.ceo/dog-api/breeds-list).  
The codes for two dog animations on Main page and on Final Page are taken from [this source](https://medium.muz.li/inspiring-examples-of-css-animation-2b2a5dd464e0).

### Acknowledgements

Inspiration for this project was received from:
* Other code institute students' projects.
* Help of the mentor and my husband.

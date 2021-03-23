# MS2 a memory game "Match a dog" 

"Match a dog" is a win-win card memory game that shows different dog's breeds images that the user should find the matching pair, testing their memory in funny way. The game can also inspire to participate in a charity project that is a source for dog's pictures.

![mockup](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/demo.png)
https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/
Live Website: [here.]()

## Table of Contents
**[User Experience](#UX)** 

**[Features](#Features)**

**[Technologies Used](#Technologies Used)**

**[Testing](#Testing)**

**[Deployment](#Deployment)**

**[Bugs](#Bugs)**

**[Credits](#Credits)**

## UX

This project is created for all users who like to spend their free time playing and relaxing.

### User Stories

As a user I want to:
* know the game rules explained to me in easy and short way;
* enjoy the design and navigate through the site intuitively;
* know interesting information about the game that encourages me to play it;
* test my memory skills in a fun way;
* have choise of difficulty levels to test my memory;
* know my results of the game to improve them;

### Strategy

The goal is to build a simple to navigate and good-looking site with minimum modals, easy instructions of the game for users who likes dogs and want to have fun.

### Scope

Features that should be in the project: rules of the game, different game options, description of the game to attract users to participate in a charity project, results of the game to encourage the users to improve their results.

### Structure

The game structure is a home page with modals with options to either start a new game with difficulty option, with information about game cards.
The game window opens after selection of difficulty with option start again or exit back to home page. 
When game is completed the final modal is opened with results.

### Skeleton

Mockup of the website was created in tool ["Balsamiq Wireframes"](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/Balsamiq%20Wireframes.pdf).

There were made some changes in mockup during creating the game: arrangement of buttons, game cards, the window with results of the game.

### Surface

The website has a warm funny look with dog's animations in a contrasting juicy colors: soft and light yellow, dark lilla for background, white and black for text according the accessibility level of any color combination in [COLOR TOOL](https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=ffe16e&secondary.color=6d63ef).  
![img](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/Color%20Tool.png)

Images for card back side and font side are taken from the website [dog.ceo](https://dog.ceo/dog-api/breeds-list), using their free API.   
Image for card back side is a logo of the website.
![img](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/dog-logo-black.png)  
The font is Comic Sans MS that gives a very fun comic feel and is perfect for the easy game.

## Features

The website has 2 sections: a Home page and a Game page.
* Home Page has a header and main menu, consisting of 3 buttons:
    * Play button - allows user to open the first modal with the difficulty options:
        * Easy - allows user to load Game Page with 4 pairs of cards.
        * Medium - allows user to load Game Page with 6 pairs of cards.
        * Hard - allows user to load Game Page with 8 pairs of cards.
    * How to play button - allows user to open the second modal with rules.
    * About button - allows user to open the thirst modal with description and inspiration of the game with the link where the user can watch all colection of images and read about them.    

* Game Page has:
    * game area with number of cards depending on difficulty level where the user can play. Cards are real photos of dogs, selected random from the website dog.seo using API.
      Game area has also display showing users countdown timer and number of their flips.
    * button Restart that allows the user to return to the modal window with difficulty options,
    * button Main Menu that allows the user to return to Home Page.
    * final modal window with results of the game, opening when game is finished, with buttons Main Menu and Ok.
    

### Features left to implement
* Recording the best results in memory game for the users can compare their results.
* Animation of flipping cards for better looking.
* Add a dog's image to the final modal window with results of the game - add the most suitable dog's breed for the users, depending on their results.

When the game is opened on mobile devices, all modal windows are the same, only game area is changed to a less number of cards in a row.

## Technologies Used

### Languages used:

HTML5 - for basic content and structure of the site.  
CSS3 - for design.  
Javascript - logic for the game.  

### Frameworks and libraries used:

[Bootstrap's components](https://getbootstrap.com/) (navbar, buttons, badge, modal) - provides responsive layout.  
[JQuery](https://jquery.com/) - for making the site interactive.   
[Font Awesome](https://fontawesome.com/) - for using icons.  
[Balsamiq](https://balsamiq.com/) - for creating a mockup of the game.  
[Dog API](https://dog.ceo/dog-api/about) - for dog's pictures for the game.  

### Tools and Other Resources:

[Github](https://github.com/) -  for version control and pushing content to repo.  
[Gitpod](https://www.gitpod.io/)  -  for building the site.  
[TinyPNG](https://tinypng.com/) - for reducing the size of images.   
[Wfonts](https://www.wfonts.com/font/comic-sans-ms) - for font of the website.  
[COLOR TOOL](https://material.io/resources/color/) - for color palettes and the accessibility of any color combination for UI.  
[Mockup generator](http://techsini.com/multi-mockup/index.php) - for testing responsive website on various devices.  
[W3 Schools](https://www.w3schools.com/) - for HTML, CSS, JS tips.  
[Stackoverflow](stackoverflow.com) - for finding answers on questions.  
[Jsonformatter](https://jsonformatter.org/scss-to-css) - for transforming SCSS code into CSS code for dog's animations.  

### Codes

Some of the code for the game was taken from the sources:
*  [Stackoverflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) - for shuffling images of game cards.
*  [Stopwatch](https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak) - for timer.
*  [CSS-animation](https://medium.muz.li/inspiring-examples-of-css-animation-2b2a5dd464e0) - for dog's animations.

## Testing

The following steps were taken to ensure the site was performing as it should:

## Deployment

Steps for deployment the website to a hosting platform GitHub Pages:  
* To open settings of GitHub [repository](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-) where the project is.
* To scroll down to the GitHub Pages section.
* To select the master branch in the source.
* To refresh the page and to return to the GitHub Pages section.
* The website is published at  [https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/.](https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/).


## Bugs

the row of the cards in responsive website

## Credits

### Contents

All content is written by the developer, Darya. Some information is taken from the website [dog.ceo](https://dog.ceo/dog-api/about).

### Media

The card dog's images used in this game were obtained from the website [dog.ceo](https://dog.ceo/dog-api/breeds-list) that provides free access to the Dog API (Original dataset taken from the the Stanford Dogs Dataset).  
The back side cards is a logo of [the same source](https://dog.ceo/dog-api/breeds-list).   
The codes for two dog's animations on Main page and on Final Page are taken from [this source](https://medium.muz.li/inspiring-examples-of-css-animation-2b2a5dd464e0).

### Acknowledgements

Inspiration for this project was received from:



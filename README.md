# MS2 a memory game "Match a dog" 

"Match a dog" is a win-win card memory game that tests user memory in a fun way. The goal is to match all pairs of identical pictures (cards) as fast as possible with the least amount of guesses. It might also inspire users to support an open source project which provides an API with all dog pictures used in this game.

![mockup](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-/blob/4284a30fdc4efadd26a8912213baf665752f828a/assets/images/demo.png)

Live Website: [here.](https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/)

## Table of Contents
**[User Experience](#UX)** 

**[Features](#Features)**

**[Technologies Used](#Technologies_Used)**

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
    * Game area with number of cards depending on difficulty level where the user can play. Cards are real photos of dogs loaded randomly using dgo.ceo API.
      Game area also displays time spent and number of card flips.
    * Button Restart allows the user to return to the modal popup with difficulty options.
    * Button Main Menu allows the user to return to Home Page.
    * Final modal popup shows results of the game. It opens when game is finished with Play Again button that acts identically as Restart.
    

### Features left to implement
* Saving game results in game memory so users can compare their results.
* Animation of flipping cards for better visualization.
* Make a logic for picking the beast suited dog breed to the user based on his game results: time spent and amount of guesses.

On mobile devices all modals and windows are the same.

## Technologies Used

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

### Tools and Other Resources:

[Github](https://github.com/) -  for version control and pushing content to repository.
[Gitpod](https://www.gitpod.io/)  -  for building the site.
[TinyPNG](https://tinypng.com/) - for reducing the size of images.
[Wfonts](https://www.wfonts.com/font/comic-sans-ms) - for font of the website.
[COLOR TOOL](https://material.io/resources/color/) - for color palettes and the accessibility of any color combination for UI.
[Mockup generator](http://techsini.com/multi-mockup/index.php) - for testing responsive website on various devices.
[W3 Schools](https://www.w3schools.com/) - for HTML, CSS, JS tips.
[Stackoverflow](stackoverflow.com) - for finding answers on questions.
[Jsonformatter](https://jsonformatter.org/scss-to-css) - for transforming SCSS code into CSS code for dog animations.

### Codes

Some of the code for the game was taken from the sources:
*  [Stackoverflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) - for shuffling game cards.
*  [Stopwatch](https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak) - for implementing timer.
*  [CSS-animation](https://medium.muz.li/inspiring-examples-of-css-animation-2b2a5dd464e0) - for dog animations.

## Testing

The following steps were taken to ensure the site was performing as it should:

## Deployment

Steps for deploying the website to a hosting platform GitHub Pages:

* Open settings of GitHub [repository](https://github.com/Dynjashik/Memory-card-game-MsP-2-Interactive-Frontend-Development-) where the project is.
* Scroll down to the GitHub Pages section.
* Select the master branch in the source.
* Refresh the page and return to the GitHub Pages section.
* The website is published at [https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/.](https://dynjashik.github.io/Memory-card-game-MsP-2-Interactive-Frontend-Development-/).


## Bugs

the row of the cards in responsive website

## Credits

### Contents

All content is written by the developer Darya Belarusik.

### Media

Dog images used in this game were obtained from the website [dog.ceo](https://dog.ceo/dog-api/breeds-list) that provides free access to the Dog API (Original dataset taken from the the Stanford Dogs Dataset).
A card cover is a logo of [the same source](https://dog.ceo/dog-api/breeds-list).
The codes for two dog animations on Main page and on Final Page are taken from [this source](https://medium.muz.li/inspiring-examples-of-css-animation-2b2a5dd464e0).

### Acknowledgements

Inspiration for this project was received from:

# Framework
A webpack-based framework to create a vanilla html, scss/css, and JavaScript project.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
This project was previously gulpjs-based. However, it seems that gulpjs isn't being updated anymore. So, the project was rewritten for the webpack framework.

## Technologies Used
The project that previously used the gulpjs framework. Now, it uses the webpack framework.

## Features
* Write and build Typescript code.
* Style the webapp with sass/scss.
* Run the webapp (for testing purposes) from the default browser.
* Build the project for development or production.

## Setup
Clone the project from github. Then move all the necessary files, excluding README.md, etc as well as other files specific to your project, to the directory containing your project.

## Usage
To build the project, use the 'build' command:
```
  npm run build
```

Then, we can run the app in the default browser by using the 'start' command:
```
  npm start
```

If we'd like, we can write tests for the jest testing framework, by running:
```
  npm run test
```
However, testing functionality is restricted to a pre-built project. As only makes sense, building a project is a later stage of the development process.
## Project Status
The project is in an ongoing status. Functionality for either creating a vanilla html, sass, ts project or a react project will be added soon. Also, functionality for defining production or development builds will be implemented in the future.

## Room for Improvement
There is functionality for nearly everything that is necessary to create a webapp these days. However, it will be useful to add functionality for react with the project.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.

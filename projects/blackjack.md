---
title: Blackjack
description: A small blackjack game made with CRA and flask
github: https://github.com/claykaufmann/cs205-final-project
---

This was a small web-app/game I made for a final project for a class I took at UVM, CS205 Software Engineering. It was developed with 3 other groupmates, Rachel Liston, Aidan Siegal, and Vincent Lai over the course of a month and a half. A running version of the game can be found at [cs205.claykaufmann.com](http://cs205.claykaufmann.com).

I spearheaded most of the project development. As the only project member with any React experience, I took over almost all of the React/JS development. On top of that, I drafted the app structure, including the JSON communication between the front end and backend of the app. Finally, I set up both the frontend and backend directory structures, as well as wrote a simple VSCode run script to allow both projects to be started easier.

## Frontend

The frontend was built using [Create React App](https://github.com/facebook/create-react-app). As such, it is a single-page app, using a variety of state and if statements to display the entire game.

The core structure of the application focuses on the state of the game retrieved from the Flask backend using endpoint requests. When the `Start Game` button is clicked, the startGame function is called, which hits the Flask endpoint `/api/start`, which will return a game ID, as well as the initial 4 cards, two for the player, and two for the dealer. From there, the route `/api/game_action/<game_id>`, is hit, passing either hit or stay. The flask app will then return all of the changes, and React will refresh the state of the game, updating the screen allowing players to see what changed.

## Backend

The backend of the app was made with Python and Flask. A game class was made to handle a specific games flow, while different stateful endpoints handle passing game information to the React frontend, as well as taking in user input from the frontend.

## Deployment

The website is hosted on my personal AWS instance, behind an nginx reverse-proxy inside a Docker container. For simplicity within my AWS instance, I decided to just contain both the frontend and backend with one docker container. While this may not be best practice, in the overall context of my applications in my VPS, having both of these in one container reduces the number of containers running on my system, and makes mapping requests to the app from the reverse-proxy simpler.

## Takeaways

This project gave me a much butter view of group project work within a more focused development environment. The main goal of the class overall was to give students a more industry-focused view on software development, using scrum boards and more serious git work. While I had a lot of this knowledge from previous internship experience, personally leading the team taught me a lot. The number one thing I learned was that I cannot expect everyone else in a group to know as much as me. While this seems obvious, it really does effect how a group functions, and works together to create a project. Being the only one who knew React/JavaScript, as well as how a separate frontend and backend function caused me to have to take on a heavier workload, as well as explain to others how the they worked in the overall scheme of the application.

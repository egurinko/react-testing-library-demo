# React Testing Library Demo

This repo is for medium articles which explain how to use React Testing Library with TypeScript !

- [The Practical Guide to Start React Testing Library with TypeScript.](https://medium.com/javascript-in-plain-english/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018)
- [Snapshots of Material-UI styled component with React Testing Library and TypeScript.](https://medium.com/javascript-in-plain-english/snapshots-of-material-ui-styled-component-with-react-testing-library-and-typescript-d82d7d926d2c)

## Overview

This repo has several branches for each articles.

1. master
   - is starting point for [The Practical Guide to Start React Testing Library with TypeScript.](https://medium.com/javascript-in-plain-english/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018)
2. feature/01_MUI_styled_component_test
   - is ending point for [The Practical Guide to Start React Testing Library with TypeScript.](https://medium.com/javascript-in-plain-english/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018)
   - is starting point for [Snapshots of Material-UI styled component with React Testing Library and TypeScript.](https://medium.com/javascript-in-plain-english/snapshots-of-material-ui-styled-component-with-react-testing-library-and-typescript-d82d7d926d2c)

## Demo Application

The application is called `My Pokemon` . To explain various topics of React Testing Library, the application itself is not super simple.

<img src="https://user-images.githubusercontent.com/23233648/83938630-2f517780-a811-11ea-9c8c-4cb2eca330b1.png">

It has three main features.

### Features

1. Check Pokedex
   - you can see pokemons as a list
   - `/pokemons`
     <br>
     <br>
     <img src="https://user-images.githubusercontent.com/23233648/83938645-514afa00-a811-11ea-837b-b5792d2abba4.png" height="80%" width="80%">
     <br>
     <br>
2. Check pokemon detail information
   - `/pokemons/:id`
     <br>
     <br>
     <img src="https://user-images.githubusercontent.com/23233648/83938649-5740db00-a811-11ea-8fe1-d10bf239108a.png" height="80%" width="80%">
     <br>
     <br>
3. Add and remove a pokemon into your list
   - you can add and remove in pokemon detail page (`/pokemons/:id`)
   - check your pokemons (`/my_pokemons`)
     <br>
     <br>
     <img src="https://user-images.githubusercontent.com/23233648/83938735-109fb080-a812-11ea-9abf-5257b8d017d2.png" height="80%" width="80%">
     <br>
     <br>

## Setup

If you want to learn React Testing Library, I recommend to write actual code.

1. Clone this repo

```
git clone https://github.com/egurinko/react-testing-library-demo.git
```

2. Install all dependencies

```
cd react-testing-library-demo
yarn
```

3. Start local server

```
yarn start
```

## How it works

- React
- Material-UI
- Redux
- react-router
- React Testing Library
- JEST
- TypeScript
- others (webpack, babel, eslint, prettier, PokéAPI)

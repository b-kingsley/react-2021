# React 2021

A boilerplate Webpack, React and TypeScript project.

-   Webpack 5.20.1
-   TypeScript 4.1.3
-   React 17.0.1
-   Babel 7.12.13
-   ES Lint
-   Prettier
-   React Testing Library
-   Webpack Production
-   Material UI
-   React Async
-   Tailwind CSS
-   Redux Toolkit
-   React Router
-   Axios

To do:

-   Azure Static Web Apps
-   CI / CD
-   MSAL
-   React Spring animations?
-   SignalR

## Step 1 - Project setup with Webpack

Initialise project
`npm init -y`

Remove the `main` entry in package.json

Add `private: true` in package.json

Install Webpack
`npm install webpack webpack-cli --save-dev`

Create `index.html` and `index.js` files

Create a basic `webpack.config.js` file

Add a npm build script in package.json `build: webpack`

## Step 2 - Webpack configuration

Install css loader and style loader
`npm install --save-dev style-loader css-loader`

Configure entry points and output format in webpack config

Install HTMLWebpackPlugin

`npm install --save-dev html-webpack-plugin`

Install the clean webpack plugin
`npm install --save-dev clean-webpack-plugin`

Setup source maps using 'inline-source-map'

Configure clean webpack to retain the index.html file

Setup webpack dev server with Hot Module Replacement

`npm install --save-dev webpack-dev-server`

Set up runtime and vendor code bundles

## Step 3 - TypeScript

Install TypeScript
`npm install --save-dev typescript ts-loader`

Configure ts.config.json file and webpack.config.js

Create custom.d.ts file

Create index.html template

## Step 4 - React

`npm install react react-dom`

`npm install --save-dev @types/react @types/react-dom`

Update index.ts file to index.tsx and implement App component

## Step 5 - Babel

Install and configure Babel

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader`

Install and configure ForkTSChecker plugin, for checking TypeScript during dev and build

`npm install --save-dev fork-ts-checker-webpack-plugin`

## Step 6 - Babel Configuration and Error Boundary

`npm install babel-plugin-transform-class-properties --save-dev`

`npm install @babel/plugin-proposal-object-rest-spread --save-dev`

## Step 7 - ESLint and Prettier

`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --save-dev`

`npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev`

Basic ESLint config:

```
{
    "parser": "@typescript-eslint/parser",
    "extends": ["plugin:@typescript-eslint/recommended"]
}
```

## Step 8 - React Testing Library

`npm install --save-dev @testing-library/react @testing-library/jest-dom jest`

`npm install --save-dev ts-jest @types/jest @types/testing-library__react @types/testing-library__jest-dom`

`ts-jest config:init`

## Step 9 - Production

`npm tsconfig-paths-webpack-plugin`
`npm install --save-dev webpack-merge`

`npm install --save-dev mini-css-extract-plugin`

`npm install --save-dev css-minimizer-webpack-plugin`

## Step 10 - Material UI

`npm install @material-ui/core @material-ui/icons`

## Step 11 - React Async

`npm install --save-dev @babel/plugin-transform-runtime`
`npm install @babel/runtime`
`npm install react-async`

## Step 12 - Tailwind CSS

`npm install tailwindcss postcss-loader`

Replace Material UI implementation with Tailwind

`npm install styled-react-modal --legacy-peer-deps`

## Step 13 - Redux Toolkit

`npm i @reduxjs/toolkit react-redux`

`npm i -D @types/react-redux`

## Step 14 - React Router

`npm i react-router-dom`

`npm i --save-dev @types/react-router-dom`

To implement a catch-all redirect, use the index page itself as the proxy with:

`http-server --proxy http://localhost:8080?`

## Step 15 - Axios

`npm i axios`

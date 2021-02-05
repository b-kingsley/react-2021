# React 2021

A boilerplate Webpack, React and TypeScript project.

- Webpack 5.20.1
- TypeScript 4.1.3

To do:

- React
- Babel
- ES Lint
- Prettier
- React Testing Library
- Material UI
- Redux Toolkit
- React Query
- React Async
- React Router
- React Spring
- SignalR

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

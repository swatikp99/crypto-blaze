# CryptoBlaze
Crypto currency price tracker.

#### 🛠 Tools Used:
- React
- [Coin Gecko API](https://www.coingecko.com/api/documentations/)

#### Branch
- main: contains the source code of this site.
- gh-pages: contains the deployed version of the site.

#### Components
- App
  - Header
  - CoinJar
    - Coin


## FAQs
#### 1. How to preview this app?
A) Before running please make sure you have installed [Node.js](https://nodejs.org/en/) in your system. Open VS Code Terminal and goto the folder where you have downloaded this repo. 
   * Type `npm start` to run the development version of this app.
   
#### 2. How to build and run the production build of the app?
A) In directory of this repo, Run the following commands in Terminal: 
   * `npm build` to build the optimized production stage app. 
   * `npm i -g serve` to install **serve** globally in your system.(Ignore this if **serve** is already installed)
   * `serve -s build -p 3000` will run the production build of this app at port 3000 of localhost.
   * Type `http://localhost:3000` on your browser to see the app.


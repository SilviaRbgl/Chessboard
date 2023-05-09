# Darstellung der möglichen Züge eines Springers

For the "DB Sprintstarter:in Junior-Entwickler:in", I have built a chessboard web app using React.
The app can show the possible moves of the knight on a chessboard.

## Setup

You will need node and npm installed globally on your machine.

- Unzip the folder and open it in your editor.

- Open the terminal and install npm packages.
  `npm install`

- Start the server.
  `npm start`

- Run the app in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to use

- URL [https://chessboard-silviarbgl.vercel.app](https://chessboard-silviarbgl.vercel.app): Here can click in any square of the chessboard to see the possible movements for the knight.

- Getting paths with a query parameter, so it shows directly a possible movement of the knight: After the query `?start=`, enter first a letter from A to H, then a number between 1 and 8, so it will display a clicked square with the possible movements for the knight. For example for `?start=A5`, it will show you the paths of the column e and row 4: [https://chessboard-silviarbgl.vercel.app/?start=e4](https://chessboard-silviarbgl.vercel.app/?start=e4)



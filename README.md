# Darstellung der möglichen Züge eines Springers

For the "DB Sprintstarter:in Junior-Entwickler:in", I built a chessboard web app using React.
The app can show the possible moves of the knight.

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

- Home URL: [http://localhost:3000](http://localhost:3000). Here can click in any square of the chessboard to see the possible paths for the knight.

- Getting paths with a query parameter, so it will show you directly a possible movement: With the query `start`, you have to enter a numeric value of two zifern between 1 to 8 after the query `?start=`, so it will open a clicked square to view the possible paths for the knight. For example for `?start=55`, it will show you the paths of the row 5 and column 5: [http://localhost:3000/?start=55](http://localhost:3000/?start=55)

- Getting paths with a dynamic URL, so it will show you directly a possible movement. With the dynamic URL, you have to enter a numeric value of two zifern between 1 to 8 after the `/`, so it will open a clicked square to view the possible paths for the knight. For example for `/55`, it will show you the paths of the row 5 and column 5: [http://localhost:3000/55](http://localhost:3000/55)


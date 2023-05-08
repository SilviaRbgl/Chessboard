import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chessboard from "./components/Chessboard/Chessboard";

function App() {
  return (
    <div className="app">
      <h1>Darstellung der möglichen Züge eines Springers</h1>
      <Routes>
        <Route path="/" element={<Chessboard />} />
        <Route path="/:start" element={<Chessboard />} />
      </Routes>
      <button className="refresh" onClick={() => window.location.reload(true)}>
        Refresh the board
      </button>
    </div>
  );
}

export default App;

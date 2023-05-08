import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Chessboard from "./components/Chessboard/Chessboard";

function App() {
  const navigate = useNavigate();
  const resetBoard = () => {
    navigate("?start=");
    window.location.reload();
  };

  return (
    <div className="app">
      <h1>Darstellung der möglichen Züge eines Springers</h1>
      <Routes>
        <Route path="/" element={<Chessboard />} />
        <Route path="/:start" element={<Chessboard />} />
      </Routes>
      <button className="refresh" onClick={resetBoard}>
        Refresh board
      </button>
    </div>
  );
}

export default App;

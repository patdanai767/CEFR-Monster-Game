import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WordIndex from "./pages/WordIndex/WordIndex";
import Mode from "./pages/Mode/Mode";
import Game from "./pages/Game/Game.jsx";
import GameTime from "./pages/Game/GameTime.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Word" element={<WordIndex />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/HMlevel" element={<HMLevel />} />
        <Route path="/Tmlevel" element={<TmLevel />} />
        <Route path="/gametime/:id" element={<GameTime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

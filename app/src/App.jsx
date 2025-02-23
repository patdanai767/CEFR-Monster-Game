import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mode from "./pages/Mode/Mode";
import Game from "./pages/Game/Game.jsx";
import GameTime from "./pages/Game/GameTime.jsx";
import Hmlevel from "./pages/Level/Level.jsx"
import TmLevel from "./pages/Level/TmLevel.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/HMlevel" element={<Hmlevel />} />
        <Route path="/Tmlevel" element={<TmLevel />} />
        <Route path="/gametime/:id" element={<GameTime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

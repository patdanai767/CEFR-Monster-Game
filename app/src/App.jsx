import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Mode from "./pages/Mode/Mode";
import Level from "./pages/Level/Level";
import TmLevel from "./pages/Level/TmLevel";
import GameTime from "./pages/Game/GameTime";
import Member from "./pages/Member/Member";
import WordIndex from "./pages/WordIndex/WordIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Word" element={<WordIndex />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/hmlevel" element={<Level />} />
        <Route path="/tmlevel" element={<TmLevel />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/gametime/:id" element={<GameTime />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

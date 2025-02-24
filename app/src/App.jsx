import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Mode from "./pages/Mode/Mode";
import Level from "./pages/Level/Level";
import TmLevel from "./pages/Level/TmLevel";
import GameTime from "./pages/Game/GameTime";
import Member from "./pages/Member/Member";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/level" element={<Level />} />
        <Route path="/Tmlevel" element={<TmLevel />} />
        <Route path="/Game/:id" element={<Game />} />
        <Route path="/gametime/:id" element={<GameTime />} />
        <Route path="/Member" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

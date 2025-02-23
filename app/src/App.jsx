import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import HMLevel from "./pages/Level/Level";
import TmLevel from "./pages/Level/TmLevel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/HMlevel" element={<Hmlevel />} />
        <Route path="/Tmlevel" element={<TmLevel />} />
        <Route path="/Game/:id" element={<Game />} />
        <Route path="/gametime/:id" element={<GameTime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

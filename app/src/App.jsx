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
        <Route path="/Game" element={<Game />} />
        <Route path="/HMlevel" element={<HMLevel />} />
        <Route path="/Tmlevel" element={<TmLevel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

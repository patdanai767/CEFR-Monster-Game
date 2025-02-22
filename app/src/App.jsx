import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WordIndex from "./pages/WordIndex/WordIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Word" element={<WordIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

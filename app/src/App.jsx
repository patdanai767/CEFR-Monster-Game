import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mode from "./pages/Mode/Mode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<Mode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

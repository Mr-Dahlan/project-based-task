import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hamim from "./pages/Hamim/App";
import Dito from "./pages/Dito/App";
import Kevin from "./pages/Kevin/App";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamim" element={<Hamim />} />
        <Route path="/dito" element={<Dito />} />
        <Route path="/kevin" element={<Kevin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing2 } from "./pages/Landing";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing2 />} />
          <Route path="/products" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

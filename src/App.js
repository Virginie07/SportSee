import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import User from "./pages/User";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User/:id" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;

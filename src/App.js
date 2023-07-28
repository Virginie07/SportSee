import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import User from "./pages/User";
import NoPage from "./pages/NoPage";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User/:id" element={<User />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;

import Home from "./components/Home";
import Listing from "./components/Listing";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

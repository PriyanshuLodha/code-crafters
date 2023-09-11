import "./App.css";
import Courses from "./Components/Courses";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teach from "./Components/Teach";
import ItemDescription from "./Components/ItemDescription";
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/itemdescription" element={<ItemDescription />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

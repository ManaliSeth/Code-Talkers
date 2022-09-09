import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarComp from "./components/includes/NavbarComp";
import Home from "./components/home/Home";
import About from "./components/about/About";
import AboutSnehal from  "./components/about/AboutSnehal";
import AboutManali from  "./components/about/AboutManali";

function App() {
  return (

    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/AboutSnehal" element={<AboutSnehal/>}></Route>
        <Route path="/AboutManali" element={<AboutManali/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;

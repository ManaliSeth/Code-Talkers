import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import AboutSnehal from  "./containers/about/AboutSnehal";
import AboutManali from  "./containers/about/AboutManali";

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

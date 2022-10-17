import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import Home from "./containers/home/Home";
import OpenAI from "./containers/openai/OpenAI";
import About from "./containers/about/About";
import Login from "./containers/account/Login";
import Register from "./containers/account/Register";
import AboutSnehal from  "./containers/about/AboutSnehal";
import AboutManali from  "./containers/about/AboutManali";
import CodeTotext from "./containers/codeToText/CodeToText";

function App() {
  return (

    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/openAI" element={<OpenAI/>}></Route>
        <Route path="/aboutSnehal" element={<AboutSnehal/>}></Route>
        <Route path="/aboutManali" element={<AboutManali/>}></Route>
        <Route path="/codeToText" element={<CodeTotext/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import Home from "./containers/home/Home";
import OpenAI from "./containers/openai/OpenAI";
import About from "./containers/about/About";
import Login from "./containers/account/Login";
import Register from "./containers/account/Register";
import AboutSnehal from "./containers/about/AboutSnehal";
import AboutManali from "./containers/about/AboutManali";
import CodeToText from "./containers/codeToText/CodeToText";
import Feedback from "./containers/feedback/Feedback";
import ErrorPage from "./containers/errorPage/ErrorPage";
import Logout from "./containers/account/Logout";

function App() {
  return (

    <Router>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/openAI" element={<OpenAI />}></Route>
        <Route exact path="/aboutSnehal" element={<AboutSnehal />}></Route>
        <Route exact path="/aboutManali" element={<AboutManali />}></Route>
        <Route exact path="/codeToText" element={<CodeToText />}></Route>
        <Route exact path="/feedback" element={<Feedback />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/logout" element={<Logout />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>

  );
}

export default App;

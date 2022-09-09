import Image from "react-bootstrap/Image";
import snehal from "../images/snehal.png";
import manali from "../images/manali.png";
import { Link } from "react-router-dom";
import "./AboutPage.css";
// import { Button } from "bootstrap";

const About = () => {

  // const onClick = () => {
  //   console.log("Click");
  // };

  return (
    <>
      <div className="profile-container">
        <div className="row text-white text-center">

          <div className="col-md-6">
            <div className="card-body">
              <div className="row">
                <Image src={snehal} width="380" height="380" alt="Snehal" />
              </div>
              <div className="row">
                <h3> Snehal Patil </h3>
                <p> Team Leader </p>
                <p>
                  Email:
                  <a href="mailto:spatil2@mail.sfsu.edu" className="link-info">
                    spatil2@mail.sfsu.edu
                  </a>
                </p>
                <p>
                  Github Username:
                  <a href="https://github.com/snehalp396" className="link-info">
                    snehalp396
                  </a>
                </p>
              </div>
              <div className="profile-options">
                <Link to="/AboutSnehal">
                  <button className="btn highlighted-btn"> About Me! </button>
                  {/* <Button text='About me' onClick={() => aboutSnehal}  /> */}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <div className="row">
                <Image src={manali} width="380" height="380" alt="Manali" />
              </div>
              <div className="row">
                <h3> Manali Seth </h3>
                <p> Github Master </p>
                <p>
                  Email:
                  <a href="mailto:mseth@mail.sfsu.edu" className="link-info">
                    mseth@mail.sfsu.edu
                  </a>
                </p>
                <p>
                  Github Username:
                  <a href="https://github.com/ManaliSeth" className="link-info">
                    Manali-Seth
                  </a>
                </p>
              </div>
              <div className="profile-options">
                <Link to="/AboutManali">
                  <button className="btn highlighted-btn"> About Me! </button>
                  {/* <Button text='About me' onClick={()=> aboutManali}  /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

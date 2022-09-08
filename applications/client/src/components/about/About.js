import Image from "react-bootstrap/Image";
import snehal from "../images/snehal.png";
import manali from "../images/manali.png";
import { Link } from "react-router-dom";
import "./AboutPage.css";
const About = () => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <>
      <div className="profile-container">
        <div class="row text-white text-center">
          <div className="col-md-6">
            <div className="card-body">
              <div className="row">
                <Image src={snehal} width="250" height="250" alt="Snehal" />
              </div>
              <div className="row">
                <h3> Snehal Patil </h3>
                <p> Team Leader </p>
                <p>
                  {" "}
                  Email:{" "}
                  <a href="mailto:spatil2@mail.sfsu.edu" class="link-primary">
                    {" "}
                    spatil2@mail.sfsu.edu{" "}
                  </a>
                </p>
                <p>
                  {" "}
                  Github Username:{" "}
                  <a href="https://github.com/snehalp396" class="link-primary">
                    {" "}
                    snehalp396{" "}
                  </a>
                </p>
              </div>
              <div className="profile-options">
                <Link to="/AboutSnehal">
                  <button className="btn highlighted-btn"> About Me! </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <div className="row">
                <Image src={manali} width="250" height="250" alt="Manali" />
              </div>
              <div className="row">
                <h3> Manali Seth </h3>
                <p> Github Master </p>
                <p>
                  {" "}
                  Email:{" "}
                  <a href="mailto:mseth@mail.sfsu.edu" class="link-primary">
                    {" "}
                    mseth@mail.sfsu.edu{" "}
                  </a>
                </p>
                <p>
                  {" "}
                  Github Username:{" "}
                  <a href="https://github.com/ManaliSeth" class="link-primary">
                    {" "}
                    Manali-Seth{" "}
                  </a>
                </p>
                {/* <Button color='green' text='About me' onClick={onClick}/> */}
              </div>
              <div className="profile-options">
                <Link to="/AboutManali">
                  <button className="btn highlighted-btn"> About Me! </button>
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

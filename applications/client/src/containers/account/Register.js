import React from "react";
import Image from "react-bootstrap/Image";
import accountImg from '../../assets/Account/account.svg'
import { Link } from "react-router-dom";
import "./account.css";

class Register extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <span className="box square border border-dark">
        
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <Image src={accountImg} alt="Register" height="100%" width="100%" />
            </div>

            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" placeholder="Enter password" />
              </div>
            </div>

          </div> 
          <div className="footer">

            <Link to="/Login">
                <button type="button" className="btn highlighted-btn">
                  Register
                </button>
            </Link>

            <p id="signUp"> Already registered? <Link to="/Login"> Sign in </Link></p>

          </div>
        </span>
      </div>
    );
  }
}

export default Register;
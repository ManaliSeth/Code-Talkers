import React from 'react'
import Image from "react-bootstrap/Image";
import accountImg from '../../assets/Account/account.svg'
import { Link } from "react-router-dom";
import "./account.css";

class Login extends React.Component {
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <span className="box square border border-dark">

            <div className="header">Login</div>

            <div className="content">

              <div className="image">
                <Image src={accountImg} alt="Login" height="100%" width="100%"/>
              </div>

              <div className="form">

                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="text" name="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" placeholder="Enter password" />
                </div>

              </div>

            </div>

            <div className="footer">
              <Link to="/">
                <button type="button" className="btn highlighted-btn">
                  Login
                </button>
              </Link>

              <p id="signUp"> Not yet registered? <Link to="/Register"> Sign up </Link></p>

            </div>

          </span>
        </div>
      );
    }
  }

  export default Login;
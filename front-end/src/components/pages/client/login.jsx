import React from 'react';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../layouts/client/navbar';
import '../../styles/client/login.css'

const Login = () => {
  const togglePassword = function() {
    const password = document.getElementById('password');
    const toggleVisibility = document.getElementById('togglePassword');

    if(password.type === "password") {
      password.type = "text";
      toggleVisibility.className = "bi bi-eye-slash fs-4 position-absolute"
    } else {
      password.type = "password";
      toggleVisibility.className = "bi bi-eye fs-4 position-absolute"
    }
  }




  return (
    <div>
      <ClientNavbar />

      <section className="login-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
        <div className="login-container container py-4 mt-5 px-3">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" className="mb-3" />
          </Link>
          <h2 className="fw-bolder text-center mb-4 text-white">LOGIN ACCOUNT</h2>

          <form className="text-start mb-0 py-0 text-white">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="d-flex">
                <input type="password" className="form-control" id="password" name="password"/>
                <span className="togglerIcon text-black">
                  <i className="bi bi-eye fs-4 position-absolute" id="togglePassword" onClick={togglePassword}></i>
                </span>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary fw-semibold px-3 py-2 login-btn">
                LOGIN
              </button>
            </div>
            <div className="text-center mt-4 mb-0">
              <p>Don't have an account yet? <Link to="/register" className="text-decoration-none register-link fw-semibold text-danger">Register</Link> instead. </p>
            </div>
          </form>

        </div>
      </section>

    </div>
  )
}

export default Login
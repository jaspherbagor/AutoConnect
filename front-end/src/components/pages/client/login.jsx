import React from 'react';
import { useState } from 'react';
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showToast = () => {

  }

  if(!username && !password) {

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
                  <i className="bi bi-eye fs-4 mt-1 position-absolute" id="togglePassword" onClick={togglePassword}></i>
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
        <div className="toast-container position-fixed top-0 p-2">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header" id="toastHeader">
              <strong className="me-auto" id="toastLabel"></strong>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body fw-medium text-start" id="toastMessage">
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login
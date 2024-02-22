import React from 'react'
import ClientNavbar from './../../layouts/client/navbar';
import { Link } from 'react-router-dom';
import '../../styles/client/register.css'
const Register = () => {
  const showPassword = () => {
    const passKey = document.getElementById('passKey');
    const togglePassKey = document.getElementById('togglePassKey');

    if(passKey.type === "password") {
      passKey.type = "text";
      togglePassKey.className = "bi bi-eye-slash fs-4 position-absolute";
    } else {
      passKey.type = "password";
      togglePassKey.className = "bi bi-eye fs-4 position-absolute";
    }
  }

  const showConfirmPassword = () => {
    const confirmPassword = document.getElementById('confirmPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    if(confirmPassword.type === "password") {
      confirmPassword.type = "text";
      toggleConfirmPassword.className = "bi bi-eye-slash fs-4 position-absolute"
    } else {
      confirmPassword.type = "password";
      toggleConfirmPassword.className = "bi bi-eye fs-4 position-absolute"
    }
  }

  return (
    <div>
      <ClientNavbar />

      <section className="register-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex justify-content-center align-items-center">
        <div className="registration-container container text-white mt-5 py-4 px-3">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" />
          </Link>
          <h2 className="text-center fw-bolder mt-4 mb-3">REGISTER ACCOUNT</h2>
          <form className="text-start">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="username"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email"/>
            </div>
            <div className="mb-3">
              <label htmlFor="passKey" className="form-label">Password</label>
              <div className="d-flex">
                <input type="password" className="form-control" id="passKey" name="passKey"/>
                <span className="view-password">
                <i className="bi bi-eye fs-4 mt-1 position-absolute" id="togglePassKey" onClick={showPassword}></i>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="d-flex">
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"/>
                <span className="view-password">
                  <i className="bi bi-eye fs-4 mt-1 position-absolute" id="toggleConfirmPassword" onClick={showConfirmPassword}></i>
                </span>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success fw-semibold register-btn px-3 py-2" id="register">REGISTER</button>
            </div>
            <p className="text-center mt-4">Already have an account? <Link to="/login" className="login-link text-decoration-none fw-semibold">Login</Link> instead.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Register
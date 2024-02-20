import React from 'react';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/login.css'

const Login = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
        <div className="login-container container bg-success py-5 mt-5 px-3">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" className="mb-3" />
          </Link>
          <h2 className="fw-bolder text-center">LOGIN ACCOUNT</h2>

          <form className="text-start">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password"/>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary fw-semibold px-3 py-2 login-btn">
                LOGIN
              </button>
            </div>
            <div className="text-center mt-4 mb-0">
              <p>Don't have an account yet? <Link to="/" className="text-decoration-none register-link">Register</Link> instead. </p>
            </div>
          </form>

        </div>
      </section>

      <ClientFooter />
    </div>
  )
}

export default Login
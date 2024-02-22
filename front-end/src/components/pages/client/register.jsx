import React from 'react'
import ClientNavbar from './../../layouts/client/navbar';
import { Link } from 'react-router-dom';
import '../../styles/client/register.css'
const Register = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="register-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex justify-content-center align-items-center">
        <div className="registration-container container bg-warning text-white mt-5 py-4 px-3">
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
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password"/>
            </div>
            <div className="mb-3">
              <label for="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"/>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success fw-semibold register-btn px-3 py-2">REGISTER</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Register
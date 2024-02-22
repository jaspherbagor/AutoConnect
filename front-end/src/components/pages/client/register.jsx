import React from 'react'
import ClientNavbar from './../../layouts/client/navbar';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="register-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex justify-content-center align-items-center">
        <div className="registration-container container bg-success mt-5 py-4 px-3">
          <Link to="/">
            <img src="../images/logo.svg" alt="logo" />
          </Link>
          <h2 className="text-center fw-bolder mt-4 mb-3">REGISTER ACCOUNT</h2>
          <form className="text-start">
            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1"/>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Register
import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/login.css'

const Login = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
        <div className="login-container container bg-success py-5 mt-5 px-3">
          <img src="../images/logo.svg" alt="logo" className="mb-3" />
          <h2 className="fw-bolder text-center">LOGIN ACCOUNT</h2>

          <form className="text-start">
            <div class="mb-3">
              <label htmlFor="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" name="email" />
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password"/>
            </div>
            <div className="text-center mt-4">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

        </div>
      </section>

      <ClientFooter />
    </div>
  )
}

export default Login
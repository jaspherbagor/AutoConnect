import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Login = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
        <div className="login-container container bg-success py-5 mt-5 px-3">
          <img src="../images/logo.svg" alt="logo" className="mb-3" />
          <h2 className="fw-bolder text-center">LOGIN ACCOUNT</h2>

          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        </div>
      </section>

      <ClientFooter />
    </div>
  )
}

export default Login
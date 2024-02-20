import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Login = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
          <div className="login-container container bg-success py-5 mt-5 px-3">
            <img src="../images/logo.svg" alt="logo" className="mb-3" />
            <h2 className="fw-bolder text-center">LOGIN ACCOUNT</h2>
          </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default Login
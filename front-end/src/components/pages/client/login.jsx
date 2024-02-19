import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Login = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center vh-100">
          <div className="container bg-danger py-5 px-3">
            <h2 className="fw-bolder text-center">LOGIN ACCOUNT</h2>
          </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default Login
import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Login = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-bolder text-start">This is a login page</h2>
        </section>
    </div>
  )
}

export default Login
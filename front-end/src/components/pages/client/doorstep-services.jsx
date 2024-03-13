import React from 'react'
import ClientNavbar from './../../../layouts/client/navbar';
import ClientFooter from '../../../layouts/client/footer';
const doorstepServices = () => {
  return (
    <div>
        <ClientNavbar/>
        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-bolder text-center">Doorstep Services</h2>
        </section>
        <ClientFooter/>
    </div>
  )
}

export default doorstepServices
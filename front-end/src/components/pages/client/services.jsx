import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';

const Services = () => {
  return (
    <div>
        <ClientNavbar />
            <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
              <h2 className="pt-5 fw-bolder text-center">SERVICES</h2>
              <p className="text-center">Doorstep - Pickup & Drop</p>
            </section>
        <ClientFooter />
    </div>
  )
}

export default Services
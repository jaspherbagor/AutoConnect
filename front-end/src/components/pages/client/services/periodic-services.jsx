import React from 'react'
import ClientNavbar from '../../../layouts/client/navbar';
import ClientFooter from '../../../layouts/client/footer';
const PeriodicServices = () => {
  return (
    <div>
        <ClientNavbar/>
        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-bolder text-center text-black">Periodic Services</h2>
        </section>
        <ClientFooter/>
    </div>
  )
}

export default PeriodicServices;
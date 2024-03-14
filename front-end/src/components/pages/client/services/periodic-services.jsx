import React from 'react'
import ClientNavbar from '../../../layouts/client/navbar';
import ClientFooter from '../../../layouts/client/footer';
const PeriodicServices = () => {
  return (
    <div>
        <ClientNavbar/>
        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-medium text-center text-black mt-5">Periodic Services</h2>
            <div className="d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-md-4 col-sm-6">

                </div>
                <div className="col-md-4 col-sm-6">

                </div>
                <div className="col-md-4 col-sm-6">

                </div>
              </div>
            </div>
        </section>
        <ClientFooter/>
    </div>
  )
}

export default PeriodicServices;
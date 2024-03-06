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
              <div className="row d-flex align-items-center justify-content-center mt-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card mb-4">
                    <img src="../images/car_detailing.png" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card mb-4">
                      <img src="../images/car_detailing.png" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card mb-4">
                      <img src="../images/car_detailing.png" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card mb-4">
                      <img src="../images/car_detailing.png" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
        <ClientFooter />
    </div>
  )
}

export default Services
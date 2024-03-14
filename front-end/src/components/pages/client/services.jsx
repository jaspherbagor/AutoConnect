import React from 'react';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/services.css'

const Services = () => {
  return (
    <div>
        <ClientNavbar />
            <section className="container-fluid px-md-4 px-sm-4 px-3 py-5 col-md-11 col-sm-11 col-12">
              <h2 className="pt-5 fw-bolder text-center">SERVICES</h2>
              <p className="text-center">Doorstep - Pickup & Drop</p>

              <div className="row d-flex align-items-center justify-content-center mt-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                    <img src="../images/periodic-services.svg" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body services-body py-3">
                      <Link className="card-title text-center fs-4 text-black text-decoration-none">Periodic Services</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/doorstep-services.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Doorstep Services</a>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/denting-and-painting.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Denting & Painting</a>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/brake-repair.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Brake Repairs</a>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                    <img src="../images/battery-replacement.svg" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body services-body py-3">
                      <a className="card-title text-center fs-4 text-black text-decoration-none">Battery Replacement</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/ac-service.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">AC Service & Repair</a>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/car-detailing.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Car Detailing Services</a>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/car-repair.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Car Major Repairs</a>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                    <img src="../images/suspension-repair.svg" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body services-body py-3">
                      <a className="card-title text-center fs-4 text-black text-decoration-none">Suspension Repairs</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                    <img src="../images/clutch-repair.svg" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body services-body py-3">
                      <a className="card-title text-center fs-4 text-black text-decoration-none">Clutch Repair</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/tire-and-wheel.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Tires and Wheels</a>
                      </div>
                    </div>
                  </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                    <img src="../images/insurance-claim.svg" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body services-body py-3">
                      <a className="card-title text-center fs-4 text-black text-decoration-none">Insurance Claims</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                    <img src="../images/windshield-and-light.svg" className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body services-body py-3">
                      <a className="card-title text-center fs-4 text-black text-decoration-none">Windshield and Lights</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card service-card mb-4">
                      <img src="../images/membership.svg" className="card-img-top img-fluid" alt="..."/>
                      <div className="card-body services-body py-3">
                        <a className="card-title text-center fs-4 text-black text-decoration-none">Membership</a>
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
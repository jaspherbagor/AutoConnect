import React from 'react'
import ClientNavbar from '../../../layouts/client/navbar';
import ClientFooter from '../../../layouts/client/footer';
import '../../../styles/client/services/periodic-services.css'
const PeriodicServices = () => {
  return (
    <div>
        <ClientNavbar/>
        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-medium text-center text-black mt-5">Periodic Services</h2>
            <div className="mt-5 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div class="card periodic-services-card mb-4">
                    <div class="card-body">
                      <div className="text-center mb-3 mt-2">
                        <i class="bi bi-wrench display-2 card-icon"></i>
                      </div>
                      <h3 class="card-title">Basic Car Service</h3>
                      <h6 class="card-subtitle mb-4 text-body-secondary mt-3">Performed at Workshop + Free Pickup & Drop Available</h6>
                      <div className="align-items-center justify-content-center mb-4">
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Engine Oil Replacement
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Air Filter Cleaning
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Oil Filter Replacement
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Coolant Top-up (200 ml)
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Brake Fluid Top-up (50 ml)
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Wiper Fluid Top-up
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Battery Water Top-up
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Car Eco Wash (if doorstep)
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Car Foam Wash (if workshop)
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Interior Vacuuming
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Car Scanning
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> Car Scanning
                        </p>
                        <p class="card-text text-start ms-3">
                          <i class="bi bi-check2-square fs-5"></i> 60 Point Check
                        </p>
                      </div>
                      
                      <a href="#" class="card-link btn btn-success add-to-cart-btn fw-semibold">Add to Cart</a>
                      {/* <a href="#" class="card-link btn btn-success buy-now-btn">Buy Now</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div class="card periodic-services-card">
                    <div class="card-body">
                      <h5 class="card-title">Standard Car Service</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary mt-3">Performed at Workshop + Free Pickup & Drop Available</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div class="card periodic-services-card">
                    <div class="card-body">
                      <h5 class="card-title">Comprehensive Car Service</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary mt-3">Performed at Workshop + Free Pickup & Drop Available</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <ClientFooter/>
    </div>
  )
}

export default PeriodicServices;
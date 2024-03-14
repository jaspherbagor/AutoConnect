import React from 'react'
import ClientNavbar from '../../../layouts/client/navbar';
import ClientFooter from '../../../layouts/client/footer';
const PeriodicServices = () => {
  return (
    <div>
        <ClientNavbar/>
        <section className="container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-medium text-center text-black mt-5">Periodic Services</h2>
            <div className="mt-5 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div class="card periodic-services-card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div class="card periodic-services-card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div class="card periodic-services-card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
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
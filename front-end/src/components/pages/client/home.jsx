import React from 'react';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Home = () => {
  return (
    <div>
        <ClientNavbar />

        <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="container-fluid text-start">
                        <h2 className="mb-4 display-5 fw-bolder">On-Demand Car Repairs, Anytime, Anywhere</h2>
                        <h5 className="mb-4">Stuck on the Road? We'll Fix It Wherever You Are.</h5>
                        <a href="">
                            <button type="button" className="btn btn-success btn-outline-danger fw-semibold py-2 px-3 fs-5">GET HELP NOW</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="../images/hero-image.png" alt="" className="img-fluid" />            
                </div>
            </div>
        </section>

        <ClientFooter />
    </div>
  )
}

export default Home
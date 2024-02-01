import React from 'react';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/home.css';
const Home = () => {
  return (
    <div>
        <ClientNavbar />

        <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="container-fluid text-start">
                        <h2 className="mb-4 display-5 fw-bold">On-Demand Car Repairs, Anytime, Anywhere</h2>
                        <h5 className="mb-4">Stuck on the Road? We'll Fix It Wherever You Are.</h5>
                        <a href="">
                            <button type="button" className="btn btn-success btn-outline-danger fw-semibold py-3 px-3 fs-5 get-help-btn">GET HELP NOW</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="../images/hero-image.svg" alt="" className="img-fluid" />            
                </div>
            </div>
        </section>
        <section className="feature-section container-fluid px-md-4 px-sm-4 py-5">
            <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <i class="bi bi-emoji-smile display-1 h-100 w-100 feature-icon"></i>
                        </div>
                        <div className="col-md-6 align-items-center">
                            <div className="col-12">
                                <p className="text-start">Satisfied Customers</p>
                            </div>
                            <div className="col-12">
                                <h1 className="fw-bolder text-start">500+</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <i class="bi bi-emoji-smile display-1 h-100 w-100 feature-icon"></i>
                        </div>
                        <div className="col-md-6 align-items-center">
                            <div className="col-12">
                                <p className="text-start">Satisfied Customers</p>
                            </div>
                            <div className="col-12">
                                <h1 className="fw-bolder text-start">500+</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <i class="bi bi-emoji-smile display-1 h-100 w-100 feature-icon"></i>
                        </div>
                        <div className="col-md-6 align-items-center">
                            <div className="col-12">
                                <p className="text-start">Satisfied Customers</p>
                            </div>
                            <div className="col-12">
                                <h1 className="fw-bolder text-start">500+</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 feature-type">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <i class="bi bi-emoji-smile display-1 feature-icon px-4 py-3"></i>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div className="container-fluid p-0">
                                <div className="col-12 py-0 my-0">
                                    <p className="text-start py-0 my-0">Satisfied Customers</p>
                                </div>
                                <div className="col-12 py-0 my-0">
                                    <h1 className="fw-bolder text-start py-0 my-0 feature-amount">500+</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ClientFooter />
    </div>
  )
}

export default Home
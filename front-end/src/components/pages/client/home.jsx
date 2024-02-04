import React from 'react';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/home.css';
const Home = () => {
    return (
        <div>
            <ClientNavbar />

            <section className="hero-section container-fluid px-md-4 px-sm-4 px-2 py-5  d-flex align-items-center justify-content-center">
                <div className="row mt-5">
                    <div className="col-md-6 d-flex align-items-center justify-content-center mb-md-0 mb-sm-5 mb-5">
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
            <section className="feature-section container-fluid px-md-4 px-sm-4 px-2 py-5">
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 feature-type mb-4">
                        <div className="row gap-0">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <i className="bi bi-emoji-smile display-3 feature-icon px-4 py-3"></i>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="container-fluid p-0">
                                    <div className="col-12 py-0 my-0">
                                        <p className="text-start py-0 my-0">Satisfied Customers</p>
                                    </div>
                                    <div className="col-12 py-0 my-0">
                                        <h1 className="fw-bolder text-start py-0 my-0 feature-amount">900+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 feature-type mb-4">
                        <div className="row gap-0">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <i className="bi bi-search display-3 feature-icon px-4 py-3"></i>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="container-fluid p-0">
                                    <div className="col-12 py-0 my-0">
                                        <p className="text-start py-0 my-0">Cars Inspected</p>
                                    </div>
                                    <div className="col-12 py-0 my-0">
                                        <h1 className="fw-bolder text-start py-0 my-0 feature-amount">600+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 feature-type mb-4">
                        <div className="row gap-0">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <i className="bi bi-tools display-3 feature-icon px-4 py-3"></i>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="container-fluid p-0">
                                    <div className="col-12 py-0 my-0">
                                        <p className="text-start py-0 my-0">Cars Repaired</p>
                                    </div>
                                    <div className="col-12 py-0 my-0">
                                        <h1 className="fw-bolder text-start py-0 my-0 feature-amount">700+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 feature-type mb-4">
                        <div className="row gap-0">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <i className="bi bi-magic display-3 feature-icon px-4 py-3"></i>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <div className="container-fluid p-0">
                                    <div className="col-12 py-0 my-0">
                                        <p className="text-start py-0 my-0">Cars Redefined</p>
                                    </div>
                                    <div className="col-12 py-0 my-0">
                                        <h1 className="fw-bolder text-start py-0 my-0 feature-amount">400+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-offered container-fluid px-md-4 px-sm-4 px-2 py-5">
                <h2 className="fw-bolder text-center"><span>SERVICES</span> OFFERED</h2>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card p-0 service-card mb-4">
                            <img src="../images/car_repair.png" className="card-img-top img-fluid" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-head fw-bolder">MAJOR REPAIR</h4>
                                <p className="card-text text-start">Elevate your auto with top-tier repair services across the Philippines.</p>
                                <a href="">
                                    <button className="btn btn-danger fw-semibold view-service-btn">View Service <i className="bi bi-arrow-right fs-5"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card p-0 service-card mb-4">
                            <img src="../images/ac_service.png" className="card-img-top img-fluid" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-head fw-bolder">AC SERVICE</h4>
                                <p className="card-text text-start">Cruise in comfort with our premier AC service, enhancing performance.</p>
                                <a href="">
                                    <button className="btn btn-danger fw-semibold view-service-btn">View Service <i className="bi bi-arrow-right fs-5"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card p-0 service-card mb-4">
                            <img src="../images/car_inspection.png" className="card-img-top img-fluid" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-head fw-bolder">CAR INSPECTION</h4>
                                <p className="card-text text-start">Drive assured, our thorough inspections meet the highest safety standards.</p>
                                <a href="">
                                    <button className="btn btn-danger fw-semibold view-service-btn">View Service <i className="bi bi-arrow-right fs-5"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card p-0 service-card">
                            <img src="../images/car_detailing.png" className="card-img-top img-fluid" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-head fw-bolder">CAR DETAILING</h4>
                                <p className="card-text text-start">Indulge your car with meticulous detailing, ensuring a rejuvenated appearance.</p>
                                <a href="">
                                    <button className="btn btn-danger fw-semibold view-service-btn">View Service <i className="bi bi-arrow-right fs-5"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <a href="">
                            <button className="btn btn-danger px-3 py-3 fw-semibold more-services-btn">VIEW MORE</button>
                        </a>
                    </div>
                </div>

            </section>
            <section className="customers-review container-fluid px-md-4 px-sm-4 px-2 py-5">
                <h2 className="fw-bolder text-center text-white"><span>CUSTOMERS</span> REVIEW</h2>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="text-center mt-4">
                            <i class="bi bi-chat-square-quote display-2 quote-icon"></i>
                            </div>
                            <h3 className="fw-semibold mt-4 text-white fst-italic">"Revolutionizing my car care experience, AutoConnect stands out with unparalleled service, reliability, and affordability. A true gem in the market, making high-quality services accessible to everyone."</h3>
                            <p className="mt-4 fw-bolder reviewer-name">Sarah Johnson</p>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <ClientFooter />
        </div>
    )
}

export default Home
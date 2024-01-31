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
                    <div className="container">
                        <h2 className="fw-bolder">Repairing Autos</h2>
                        <h5>Always active 24/7</h5>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <p>This is an image</p>
                    <img src="" alt="" />
                    
                </div>
            </div>
        </section>

        <ClientFooter />
    </div>
  )
}

export default Home
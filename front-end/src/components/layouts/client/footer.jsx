import React from 'react';

const ClientFooter = () => {
  return (
    <div>
        <section className="footer container-fluid px-md-4 px-sm-4 px-2 py-5 bg-black">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center d-flex justify-content-center align-items-center">
              <img src="../images/logo.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center text-white">
              <h5 className="fw-bolder mb-4">CUSTOMER SERVICE</h5>
              <a href="" className="text-decoration-none text-white">
                <p className="footer-link">Contact Us</p>
              </a>
              <a href="" className="text-decoration-none text-white">
              <p className="footer-link">FAQs</p>
              </a>
              <a href="" className="text-decoration-none text-white">
              <p className="footer-link">Privacy Policy</p>
              </a>
              <a href="" className="text-decoration-none text-white">
              <p className="footer-link">Terms & Condition</p>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center">
              col-3
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center">
              col-4
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center">
              col-5
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center">
              col-6
            </div>
          </div>
        </section>
    </div>
  )
}

export default ClientFooter;
import React from 'react';
import '../../styles/client/footer.css';
import { Link } from 'react-router-dom';
const ClientFooter = () => {
  return (
    <div>
        <section className="footer container-fluid px-md-4 px-sm-4 px-2 py-5 bg-black">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center d-flex justify-content-center align-items-center">
              <Link to="/">
                <img src="../images/logo.svg" alt="logo" className="img-fluid" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center text-white mb-4">
              <h5 className="fw-bolder mb-4">CUSTOMER SERVICE</h5>
              <Link to="/contact" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Contact Us</p>
              </Link>
              <Link to="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">FAQs</p>
              </Link>
              <Link href="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Privacy Policy</p>
              </Link>
              <Link to="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Terms & Condition</p>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center text-white mb-4">
            <h5 className="fw-bolder mb-4">OUR SERVICES</h5>
              <Link to="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Denting & Painting</p>
              </Link>
              <Link to="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Major Repair</p>
              </Link>
              <Link to="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Car Detailing</p>
              </Link>
              <Link to="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Battery Replacement</p>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center text-white mb-4">
            <h5 className="fw-bolder mb-4">QUICK LINKS</h5>
              <Link to="/" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Home</p>
              </Link>
              <Link to="/about" className="text-decoration-none text-white footer-link">
                <p className="footer-link">About</p>
              </Link>
              <Link to="/services" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Services</p>
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center text-white mb-4">
            <h5 className="fw-bolder mb-4">MY ACCOUNT</h5>
              <a href="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Account</p>
              </a>
              <a href="" className="text-decoration-none text-white footer-link">
                <p className="footer-link">Purchases</p>
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-lg-start text-md-start text-sm-start text-center text-white mb-4">
              <h5 className="fw-bolder">SOCIAL LINKS</h5>
              <div className="container-fluid d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-center">
                <a href="" className="text-decoration-none text-white footer-link">
                  <i className="bi bi-facebook fs-3 me-3"></i>
                </a>
                <a href="" className="text-decoration-none text-white footer-link">
                  <i className="bi bi-youtube fs-3 me-3"></i>
                </a>
                <a href="" className="text-decoration-none text-white footer-link">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>               
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ClientFooter;
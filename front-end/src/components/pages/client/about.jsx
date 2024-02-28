import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/about.css'
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="container-fluid vh-100">
            <div className="about-head container-fluid d-flex align-items-center justify-content-center py-5 bg-danger vw-100">
              <h2 className="text-center fw-bolder pt-4 pb-3">ABOUT AUTO CONNECT</h2>
            </div>
            <div className="about-content container-fluid px-md-4 px-sm-4 px-2 py-5">

            </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/about.css'
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="about-section container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="fw-bolder text-center mt-5 pt-4">ABOUT AUTOCONNECT</h2>
            <p className="text-center lead mt-5">Founded in November 2023 by visionary entrepreneur Ronaldo Tarroza, AUTO CONNECT stands as a testament to a commitment to redefine the landscape of the automotive service industry in the Philippines. Our core mission is rooted in the desire to streamline the experience for discerning car owners seeking top-notch mechanical expertise. AUTO CONNECT introduces a pioneering methodology to automotive care with its innovative Doorstep - Pickup & Drop service.</p>
            <div className="row text-center">
              <h2 className="fw-bolder mt-4 mb-4">CORE VALUES</h2>
              <div className="col-md-4">

                <h3 className="fw-bold">QUALITY</h3>
                <p>AUTO CONNECT ensures optimal vehicle performance through cutting-edge technology and expert technicians, providing the highest standard of maintenance and repairs for a superior automotive experience, surpassing customer expectations consistently.</p>
              </div>
              <div className="col-md-4">

                <h3 className="fw-bold">SUSTAINABILITY</h3>
                <p>Dedicated to eco-friendly practices, AUTO CONNECT prioritizes sustainability in every service. From energy-efficient equipment to responsible product usage, we minimize our environmental impact, ensuring efficient vehicles and a healthier planet for future generations.</p>
              </div>
              <div className="col-md-4">

                <h3 className="fw-bold">INTEGRITY</h3>
                <p>AUTO CONNECT upholds the highest standards of integrity in transparent communication, honest assessments, and fair pricing. We prioritize trust through ethical practices, fostering long-term relationships built on accountability and reliability.</p>
              </div>
            </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
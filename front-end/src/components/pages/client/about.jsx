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
            <div className="about-content">
              <h2>This is an about page content</h2>
            </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
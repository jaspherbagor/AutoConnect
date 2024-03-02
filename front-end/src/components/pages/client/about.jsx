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
            <p className="text-center lead mt-5">Established in November of the previous year by founder Ronaldo Tarroza, AUTO CONNECT was born out of a vision to revolutionize the car service industry in the Philippines. With a mission to simplify the process for car owners in need of quality mechanics, AUTO CONNECT introduces a groundbreaking approach to automotive care through its Doorstep - Pickup & Drop service.</p>
            <div className="about-content">
              <h2>This is an about page content</h2>
            </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
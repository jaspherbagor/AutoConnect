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
            <div className="about-content">
              <h2>This is an about page content</h2>
            </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
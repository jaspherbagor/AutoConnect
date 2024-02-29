import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/about.css'
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="container-fluid w-100">
            <div className="about-head container-fluid d-flex align-items-center justify-content-center py-5 bg-danger w-100">
              <h2 className="text-center fw-bolder pt-4 pb-3 mt-5">ABOUT AUTO CONNECT</h2>
            </div>
            <div className="about-content container-fluid px-md-4 px-sm-4 px-2 py-5">
              <h2>This is an about page content</h2>
            </div>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
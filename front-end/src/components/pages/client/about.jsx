import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/about.css'
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="about-section container-fluid px-md-4 px-sm-4 px-3 py-5">

            <h2 className="fw-bolder text-center mt-5 pt-4">ABOUT <span>AUTOCONNECT</span></h2>
            <p className="text-center lead mt-5">Founded in November 2023 by visionary entrepreneur Ronaldo Tarroza, AUTO CONNECT stands as a testament to a commitment to redefine the landscape of the automotive service industry in the Philippines. Our core mission is rooted in the desire to streamline the experience for discerning car owners seeking top-notch mechanical expertise. AUTO CONNECT introduces a pioneering methodology to automotive care with its innovative Doorstep - Pickup & Drop service.</p>

            <div className="row text-center">
              <h2 className="fw-bolder mt-5 mb-5">CORE <span>VALUES</span></h2>
              <div className="col-md-4">
                <i className="bi bi-trophy display-1 core-values-icon"></i>
                <h3 className="fw-bold mb-4 mt-3">QUALITY</h3>
                <p>AUTO CONNECT ensures optimal vehicle performance through cutting-edge technology and expert technicians, providing the highest standard of maintenance and repairs for a superior automotive experience, surpassing customer expectations consistently.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-tree display-1 core-values-icon"></i>
                <h3 className="fw-bold mb-4 mt-3">SUSTAINABILITY</h3>
                <p>Dedicated to eco-friendly practices, AUTO CONNECT prioritizes sustainability in every service. From energy-efficient equipment to responsible product usage, we minimize our environmental impact, ensuring efficient vehicles and a healthier planet for future generations.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-shield-check display-1 core-values-icon"></i>
                <h3 className="fw-bold mb-4 mt-3">INTEGRITY</h3>
                <p>AUTO CONNECT upholds the highest standards of integrity in transparent communication, honest assessments, and fair pricing. We prioritize trust through ethical practices, fostering long-term relationships built on accountability and reliability.</p>
              </div>
            </div>

            <h2 className="fw-bolder text-center mt-5 mb-4">OUR <span>MISSION</span></h2>
            <p>At AUTOCONNECT, our mission is to redefine the automotive service experience in the Philippines. We are committed to delivering unparalleled convenience, expertise, and sustainability through innovative solutions, ensuring every customer enjoys a seamless and reliable journey on the road.</p>

            <h2 className="fw-bolder text-center mt-5 mb-4">OUR <span>VISION</span></h2>
            <p>AUTOCONNECT envisions a future where car maintenance is synonymous with efficiency, sustainability, and trust. We strive to be the foremost choice in automotive care, revolutionizing the industry by consistently exceeding customer expectations, fostering eco-friendly practices, and building enduring relationships based on transparency and integrity. Our vision is to drive the evolution of the car service landscape, setting new standards for excellence in the Philippines and beyond.</p>

            <h2 className="fw-bolder text-center mt-5 mb-4"><span>TEAM</span> EXPERTISE</h2>
            <p>Meet the heart of AUTOCONNECT – our team of seasoned professionals, driven by a passion for automotive excellence. With years of industry experience, our skilled technicians and staff are dedicated to providing not just services but a commitment to your vehicle's optimal performance. Trust us; your car is in the hands of experts who truly care.</p>

            <h2 className="fw-bolder text-center mt-5 mb-4"><span> Doorstep - Pickup & Drop</span> SERVICE</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
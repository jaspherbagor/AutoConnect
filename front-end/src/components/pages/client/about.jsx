import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/about.css'
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="vh-100">
            <h2>This is an about page</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
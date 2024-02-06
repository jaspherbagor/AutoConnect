import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/about.css'
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="vh-100 px-md-4 px-sm-4 px-2 py-5">
            <h2 className="pt-5 text-start">This is an about page... This is under construction...</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
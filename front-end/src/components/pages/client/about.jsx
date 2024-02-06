import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const About = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="vh-100">
            <h2 className="mt-5 ">This is an about page</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default About
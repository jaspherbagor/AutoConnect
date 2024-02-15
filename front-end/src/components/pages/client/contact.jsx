import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';

const Contact = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="contact container-fluid px-4 py-5">
            <h2 className="text-start">This is a contact page...</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default Contact
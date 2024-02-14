import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Faqs = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="container-fluid px-4 py-5">
            <h2 className="text-start mt-5">This is an FAQ page</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default Faqs
import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Faqs = () => {
  return (
    <div>
        <ClientNavbar/>

        <section className="faq-section container-fluid px-md-4 px-sm-4 px-3 py-5">
            <h2 className="text-center mt-5">FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
        </section>

        <ClientFooter/>
    </div>
  )
}

export default Faqs
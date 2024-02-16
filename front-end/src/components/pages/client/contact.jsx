import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';

const Contact = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="contact-section container-fluid px-md-4 px-sm-4 px-3 py-5">
        <h2 className="text-center pt-5 fw-bolder">CONTACT FORM</h2>
        <div className="container col-8 text-start">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        
      </section>

      <ClientFooter />
    </div>
  )
}

export default Contact
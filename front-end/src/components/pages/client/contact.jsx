import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';

const Contact = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="contact-section container-fluid px-md-4 px-sm-4 px-3 py-5">
        <h2 className="text-center pt-5">This is a contact page...</h2>
        <div className="container">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
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
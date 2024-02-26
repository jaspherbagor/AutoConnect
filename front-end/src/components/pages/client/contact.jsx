import React from 'react';
import { useState } from 'react';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
import '../../styles/client/contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [typeOfService, setTypeOfService] = useState('');
  const [message, setMessage] = useState('')

  const showToast = (label, message, color, border, background) => {
    const toastLive = document.getElementById('liveToast');
    const label = document.getElementById('toastLabel');
    const message = document.getElementById('toastMessage');
    const header = document.getElementById('toastHeader');
    const toast = new window.bootstrap.Toast(toastLive)
  }

  const submitContact = () => {
    
  }

  return (
    <div>
      <ClientNavbar />
      <section className="contact-heading container-fluid px-md-4 px-sm-4 px-3 py-5 bg-success">
        <h2 className="fw-bolder text-center pt-5 pb-3 mt-4 text-white">CONTACT FORM</h2>
      </section>
      <section className="contact-section container-fluid px-md-4 px-sm-4 px-3 py-5">
        <div className="container col-md-10 col-sm-10 col-12 text-start">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
              </div>
            </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber" name="contactNumber" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip/Postal Code</label>
                    <input type="number" className="form-control" id="zipCode" name="zipCode" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="typeOfService" className="form-label">Type of Service</label>
                    <select name="typeOfService" id="typeOfService" className="form-control">
                      <option value="">-- Select type of service --</option>
                      <option value="denting-and-painting">Denting and Painting</option>
                      <option value="major-repair">Major Repair</option>
                      <option value="car-detailing">Car Detailing</option>
                      <option value="battery-replacement">Battery Replacement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea name="message" id="message" className="w-100 form-control"></textarea>
              </div>

            <button type="submit" className="btn btn-primary contact-btn fw-semibold px-3 py-2">
              Submit
            </button>
          </form>
        </div>
        <div className="toast-container position-fixed top-0 p-2">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header" id="toastHeader">
              <strong className="me-auto" id="toastLabel"></strong>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body fw-medium text-start" id="toastMessage">
            </div>
          </div>
        </div>

      </section>

      <ClientFooter />
    </div>
  )
}

export default Contact
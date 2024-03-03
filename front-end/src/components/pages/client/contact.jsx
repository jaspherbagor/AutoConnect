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
    const toastLabel = document.getElementById('toastLabel');
    const toastMessage = document.getElementById('toastMessage');
    const toastHeader = document.getElementById('toastHeader');
    const toast = new window.bootstrap.Toast(toastLive);

    toastLabel.innerText = label;
    toastMessage.innerText = message;
    toastMessage.style.color = color;
    toastLive.style.border = `2.5px solid ${border}`;
    toastHeader.style.background = background;
    toast.show()
  }

  const handleSubmitContact = async(e) => {
    e.preventDefault();
    
    const port = 4000;
    const url = `http://localhost:${port}/contact`;

    if(!name && !email && !contactNumber && !zipCode && !address && !typeOfService && !message)
    {
      showToast("OPS!!", "No data is inputted!", "red", "red", "red")
    }

    else if(!name || !email || !contactNumber || !zipCode || !address || !typeOfService || !message)
    {
      showToast("OPS!!", "Please complete all the required information!", "red", "red", "red")
    }

    else
    {
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          contactNumber,
          zipCode,
          address,
          typeOfService,
          message
        })

      });

      if(!response.ok) {
        throw new Error ('Nework was not ok!')
      }

      const result = await response.json();

      if(result.success) {
        showToast("SUCCESS", "Your message has been submitted successfully!", "green", "green", "green");
          setName('');
          setEmail('');
          setContactNumber('');
          setZipCode('');
          setAddress('');
          setTypeOfService('');
          setMessage('')
      } else {
        showToast("OPS!!", "Something went wrong on the server!", "red", "red", "red")
      }


    } catch(error) {
      console.error('Something went wrong!');
      showToast("OPS!!", "Something went wrong on the server123!", "red", "red", "red")
    }
  }

  }

  return (
    <div>
      <ClientNavbar />
      <section className="contact-heading container-fluid px-md-4 px-sm-4 px-3 py-5 bg-success">
        <h2 className="fw-bolder text-center pt-5 pb-3 mt-4 text-white">CONTACT FORM</h2>
      </section>
      <section className="contact-section container-fluid px-md-4 px-sm-4 px-3 py-5 d-flex align-items-center justify-content-center">
        <div className="container col-md-10 col-sm-10 col-12 text-start">
          <form onSubmit={handleSubmitContact}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
            </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip/Postal Code</label>
                    <input type="number" className="form-control" id="zipCode" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="typeOfService" className="form-label">Type of Service</label>
                    <select name="typeOfService" id="typeOfService" className="form-control" value={typeOfService} onChange={(e) => setTypeOfService(e.target.value)}>
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
                <textarea name="message" id="message" className="w-100 form-control" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

            <button type="submit" className="btn btn-primary contact-btn fw-semibold px-3 py-2">
              Submit
            </button>
          </form>
        </div>
        <div className="toast-container position-fixed top-0 p-2 m-auto">
          <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header" id="toastHeader">
              <strong className="me-auto text-white" id="toastLabel"></strong>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body fw-medium" id="toastMessage">
            </div>
          </div>
        </div>
      </section>

      <ClientFooter />
    </div>
  )
}

export default Contact
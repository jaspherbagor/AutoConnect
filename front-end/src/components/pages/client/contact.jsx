import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';

const Contact = () => {
  return (
    <div>
      <ClientNavbar />
      <section className="contact-heading container-fluid px-md-4 px-sm-4 px-3 py-5 bg-success">
        <h2 className="fw-bolder text-center pt-5 mt-4">CONTACT FORM</h2>
      </section>
      <section className="contact-section container-fluid px-md-4 px-sm-4 px-3 py-5">
        <div className="container col-10 text-start">
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
                    <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactnumber" name="contactnumber" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">Zip/Postal Code</label>
                    <input type="number" className="form-control" id="zipcode" name="zipcode" />
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
                    <label htmlFor="typeofservice" className="form-label">Type of Service</label>
                    <select name="typeofservice" id="typeofservice" className="form-control">
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
                <textarea name="message" id="message" cols="30" rows="10" className="w-100 form-control"></textarea>
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
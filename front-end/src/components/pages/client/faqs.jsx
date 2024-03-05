import React from 'react'
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Faqs = () => {
  return (
    <div>
      <ClientNavbar />

      <section className="faq-section container-fluid px-md-4 px-sm-4 px-3 py-5">
        <h2 className="text-center mt-5 mb-5">FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
        <div className="col-md-10 col-sm-10 col-12 align-items-center justify-content-centerm container-fluid">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq-One" aria-expanded="true" aria-controls="faq-One">
                  1. How does the Doorstep - Pickup & Drop service work?
                </button>
              </h2>
              <div id="faq-One" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <p>Our Doorstep service is designed for your convenience. Schedule a pickup, and our team will collect your vehicle, perform the necessary services, and return it to your doorstep—all without you having to visit the workshop.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Two" aria-expanded="false" aria-controls="faq-Two">
                  Accordion Item #2
                </button>
              </h2>
              <div id="faq-Two" class="accordion-collapse collapse">
                <div class="accordion-body text-start">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Three" aria-expanded="false" aria-controls="faq-Three">
                  Accordion Item #3
                </button>
              </h2>
              <div id="faq-Three" class="accordion-collapse collapse">
                <div class="accordion-body text-start">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Four" aria-expanded="true" aria-controls="faq-Four">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Four" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Five" aria-expanded="true" aria-controls="faq-Five">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Five" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Six" aria-expanded="true" aria-controls="faq-Six">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Six" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Seven" aria-expanded="true" aria-controls="faq-Seven">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Seven" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Eight" aria-expanded="true" aria-controls="faq-Eight">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Eight" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Nine" aria-expanded="true" aria-controls="faq-Nine">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Nine" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-Ten" aria-expanded="true" aria-controls="faq-Ten">
                  Accordion Item #1
                </button>
              </h2>
              <div id="faq-Ten" class="accordion-collapse collapse show">
                <div class="accordion-body text-start">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ClientFooter />
    </div>
  )
}

export default Faqs
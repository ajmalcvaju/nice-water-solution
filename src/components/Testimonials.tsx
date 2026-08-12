import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title-wrap text-center">
          {/* <span className="section-tag">CLIENT FEEDBACK</span> */}
          <h2 className="section-title text-center">Testimonials</h2>
        </div>

        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card card-cyan">
            <div className="quote-bubble-icon">“</div>
            <div className="testimonial-header">
              <h3 className="client-name">Salman</h3>
              <div className="client-role">Doctor</div>
            </div>
            <div className="star-rating">★★★★★</div>
            <p className="testimonial-text">
              "Thank you for the quick response. I want to let you know that I really appreciate the great customer assistance at Nice Water Solutions. The water taste and mineral balance in our hospital clinic has been exceptional!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card card-blue">
            <div className="quote-bubble-icon">“</div>
            <div className="testimonial-header">
              <h3 className="client-name">Raheem</h3>
              <div className="client-role">Businessman</div>
            </div>
            <div className="star-rating">★★★★★</div>
            <p className="testimonial-text">
              "I appreciate how quickly you resolved the problem for me. We installed a 500 LPH Commercial RO plant for our hotel and the zero-maintenance performance has exceeded our expectations. I will definitely be recommending your company to my friends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

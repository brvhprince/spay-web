import React from "react";

const HowItWorks = () => {
  return (
    <section className="event_fact_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>How SPAY gets</span> everything to work.
          </h2>
        </div>
        <div className="seo_fact_info">
          <div className="seo_fact_item wow fadeIn">
            <div className="text">
              <div className="counter one f_size_22">Register</div>
              <p>An account with us</p>
            </div>
          </div>
          <div className="seo_fact_item wow fadeIn" data-wow-delay="0.3s">
            <div className="text">
              <div className="counter two f_size_22">Connect</div>
              <p>Your bank and wallet</p>
            </div>
          </div>
          <div className="seo_fact_item wow fadeIn" data-wow-delay="0.6s">
            <div className="text">
              <div className="counter three f_size_22">Pay</div>
              <p>Customers &amp; Families</p>
            </div>
          </div>
          <div className="seo_fact_item last wow fadeIn" data-wow-delay="0.9s">
            <div className="text">
              <div className="counter four f_size_22">Receive</div>
              <p>Payments from others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;

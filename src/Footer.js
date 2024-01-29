// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <p>Don’t miss any updates of our new templates and extensions.!</p>
                <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true">
                  <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                  <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* ... (similar conversion for other columns) */}
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                Registered Address
                <br />
                Block C - 168, Second floor, sector 10, Noida Gautam Buddha Nagar, India 201301
              </p>
              <p>
                For any queries or concerns, write to us at <a href="mailto:info@mavolo.in">info@mavolo.in</a>
                <br />
                Mob +91 8861587589, 7892653145, 9787093848
                <br />
                Tel 0120-4127037
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>© 2022 Mavolo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

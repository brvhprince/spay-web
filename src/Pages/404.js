import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Footer from '../components/Footer';
const NotFound = () => (
  <div className="body_wrapper">
    <CustomNavbar />
    <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/error.png")} alt="" />
          <h2>Error. We can’t find the page you’re looking for.</h2>
          <a href="/" className="about_btn btn_hover">
            Back to Home Page <i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
);
export default NotFound;

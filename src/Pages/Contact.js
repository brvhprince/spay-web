import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Contacts from '../components/Contacts';
import Footer from "../components/Footer";

const ContactUs = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb.png" Ptitle="Contact Us" Pdescription="We are ready for your support, enquiries and how we can make SPAY better"/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
export default ContactUs;
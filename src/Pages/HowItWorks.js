import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ServiceAlt from '../components/Service/ServiceAlt';
import Footer from "../components/Footer";
const HowItWorks = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb.png" Ptitle="How SPAY Works" Pdescription="A centralized system making businesses run smarter with secured, fast and easy payments."/>
            <ServiceAlt/>
            <Footer/>
        </div>
    )
}
export default HowItWorks;
import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Teams from '../components/Team/Team';
import Footer from '../components/Footer';
const Team =()=>{
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area breadcrumb_area_three" imgName="team.jpg" Ptitle="Our Team" Pdescription="Great ideas are backed by Great Minds"/>
            <Teams/>
            <Footer />
        </div>
    )
}
export default Team;
import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import ServiceAltItem from "./ServiceAltItem";
class ServiceAlt extends Component{
    render(){
        return(
            <section className="agency_service_area bg_color">
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">Your payments wherever your<br/> business agency</h2>
                    <div className="row mb_30">
                        <div className="col-lg-3 col-sm-6">
                            <Reveal effect="fadeInUp" duration={1100}><ServiceAltItem iShap="icon_shape1.png"  Sicon="ti-user" text="Register" description="Create an account on SPAY, get ready to pay and get paid." btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Reveal effect="fadeInUp" duration={1400}><ServiceAltItem iShap="icon_shape2.png"  Sicon="ti-panel" text="Connect" description="Connect your bank accounts and mobile money wallets." /></Reveal>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Reveal effect="fadeInUp" duration={1700}><ServiceAltItem iShap="icon_shape3.png"  Sicon="ti-money" text="Make Payments" description="Make payments directly from your preferred bank or mobile wallet." /></Reveal>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Reveal effect="fadeInUp" duration={1700}><ServiceAltItem iShap="icon_shape4.png"  Sicon="ti-thumb-up" text="Get Paid" description="Receive payments from customers directly into your wallet." /></Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ServiceAlt;
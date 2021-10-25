import React from 'react';
import Reveal from 'react-reveal/';
import {Link} from 'react-router-dom';
const Banner =() =>{
    return(
        <section className="startup_banner_area_three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Reveal bottom cascade duration={1100}>
                            <div className="startup_content_three">
                                <h2><span>The simpler &amp; safer</span> way to pay and get paid</h2>
                                <p className="w_color f_p f_size_18">Introducing Ghana's first centralized payment system</p>
                                <Link to="/how-it-works" className="btn_six slider_btn">Find Out More &nbsp;<i className="ti-arrow-right"></i></Link>


                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="stratup_app_screen">
                <Reveal effect="slideInnew"><img className="phone" src={require('../img/mockup.png')} width={300} alt="SPAY Dashboard"/></Reveal>
            </div>
        </section>
    )
}
export default Banner;
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                            <img src={require("../img/logo2.png")} height={25} alt="SPAY"/>
                            <img src={require("../img/logo.png")}  height={25} alt="SPAY"/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item">
                                    <Link to="./" className="nav-link" role="button">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item"><NavLink title="How SPAY Works" className="nav-link" to="/how-it-works">How SPAY Works</NavLink></li>
                                <li className="nav-item"><NavLink title="Our Team" className="nav-link" to="/team">Team</NavLink></li>
                                <li className="nav-item"><NavLink title="Contact Us" className="nav-link" to="/contact">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;
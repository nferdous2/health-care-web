import React from 'react';
import './Footer.css'
import logo from '../../images/logo.jpg';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer mt-3">
            <div className="container text-start py-3">
                <div className="row ">
                    <div className="col-md-5">
                        <div className="col-md-4 text-center">
                            <img className='img-fluid w-25' src={logo} alt="" />
                            <h4>Health Care Hospital</h4>
                        </div>
                    </div>
                    <div className="col-md-7">

                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">our blog</a></li>
                                    <li><a href="#">Sign up </a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">Get help</a></li>
                                    <li><a href="#">Read FAQs</a></li>
                                    <li> <a href="">Privacy policy</a></li>
                                    <li>  <a href="">Terms condition</a></li>
                                </ul>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>

                        <div className="col-md-5">
                            <h5>Contact With Us</h5>
                            {/* icons use */}
                            <div className="icons-container d-flex ">
                                <div className="icons">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </div>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                </div>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <p className="text-center">@Copy right  2021</p>
            </div>
        </div >

    );
};

export default Footer;
import React from 'react';
import about from '../../images/aboutpic.jpg'
import './About.css'
const About = () => {
    return (
        <div id="about">

            <div class="about-section card m-3 p-4" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={about} className="rounded-end about-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body about-container ">
                            <h4 className="card-title">About Us</h4>
                            <p className="card-text">H&Care Hospital is a 250-bed multi-disciplinary hospital. Confidently and capably provides comprehensive health care with the latest medical, surgical and diagnostic equipment and facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of- the-art technology.
                            </p>
                            <h4 className="card-title">Vision</h4>
                            <p className="card-text">The vision of our is to lead the evolution of healthcare and be the most trusted health service provider.</p>
                            <h4 className="card-title">Mission</h4>
                            <p className="card-text">The mission of H&Care Hospital is to provide quality health services and facilities for the community, to promote wellness, torelieve suffering and to restore health as swiftly, safely, and humanely as possible, consistent with the best service we can give and at the highest value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;
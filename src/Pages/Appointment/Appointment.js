
import React from 'react';
import { Link } from 'react-router-dom';
import call from '../../images/img2.jpg';
import './Appointment.css'
const Appointment = () => {
    return (
        <div>
            <div className=" about-section card m-5 p-3 " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={call} className="rounded-end about-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body about-container ">
                            <h4 className="card-title">Do You Want To take Appoinment or want to book ambulence</h4>
                            <p>Click Here To Take Dr's Appointment</p>
                            <div>
                                <Link to="/booking">
                                    <button className="btn-click">Click</button>
                                </Link>
                            </div>
                            <p>Click Here To Book Ambulence</p>
                            <Link to="/booking">
                                <button className="btn-click">Click</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
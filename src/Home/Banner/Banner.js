import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner-container  d-flex justify-content-center align-items-center">
                <div className="banner-div mx-auto justify-content-center align-items-center">
                    <h2 className="text">Welcome To Our Hospital</h2>
                    <h4 className="text">Hope You will be satisfied by our services</h4>
                    <button className="banner-btn p-3">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
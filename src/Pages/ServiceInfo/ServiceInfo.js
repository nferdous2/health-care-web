import React from 'react';
import { Link } from 'react-router-dom';
const ServiceInfo = ({ service }) => {
    const { name, img, description } = service;
    const url = '/home';
    return (
        <div className="service pb-3">
            < div className="container-div p-4">
                <img src={img} className="w-25 container-image" alt="" />
                <h5>{name}</h5>
                <p>Description:{description}</p>

                <Link to={url}>
                    <button type="submit" className="btn btn-primary btn-block mb-2 mx-2">Back </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceInfo;
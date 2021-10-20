import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, id } = service;
    const url = `/singleservice/${id}`;
    return (
        <div className="service pb-3">
            < div className="container-div p-4">
                <img src={img} className="w-25 container-image" alt="" />
                <h5>{name}</h5>
                <Link to={url}>
                    <button type="submit" className="btn btn-primary btn-block mb-2 mx-2">More </button>
                </Link>
            </div>
        </div>
    );
};

export default Service;
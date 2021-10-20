import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleService = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState({})
    useEffect(() => {
        const url = `/service.JSON/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="mt-3 mb-2 p-5">
            <h5>ID: {serviceId}</h5>
            <h3>{services.img}</h3>
            <p>Name:{services.name}</p>
            <p>Description:{services.description}</p>
            <Link to="/home">
                <button className="btn btn-primary btn-block mb-2 mx-2">Back</button>
            </Link>
        </div>
    );
};

export default SingleService;
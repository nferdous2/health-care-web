import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/service.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5 text-center p-3 mb-5">Our services</h2>
            <Container className="mt-3">
                <Row xs={1} md={4} className="g-4 container-service">
                    {
                        services.map(service => <Service
                            id={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;
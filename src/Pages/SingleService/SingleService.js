
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const SingleService = () => {
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
                        services.map(service => <ServiceInfo
                            id={service.id}
                            service={service}
                        ></ServiceInfo>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default SingleService;

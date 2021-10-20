import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';
const Experts = () => {
    const [expert, setExpert] = useState([])
    useEffect(() => {
        fetch('./experts.JSON')
            .then(res => res.json())
            .then(data => setExpert(data));
    }, [])
    return (
        <div id="experts">
            <h2 className="text-primary mt-5 text-center p-3 mb-5">Our Experts</h2>
            <Container className="mt-3">
                <Row xs={1} md={4} className="g-4">
                    {
                        expert.map(experts => <Expert
                            key={experts.id}
                            experts={experts}
                        ></Expert>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Experts;
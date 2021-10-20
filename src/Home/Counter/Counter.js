import { faHospital, faProcedures, faSmile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Counter.css'
const Counter = () => {
    return (
        <section class="counter mt-5">
            <Container>
                <Row className="mb-3 mt-3">
                    <Col className="details-counter p-4">
                        <FontAwesomeIcon className="icons-counter" icon={faHospital}></FontAwesomeIcon>

                        <h5>100+</h5>
                        <h4>Hospitals</h4>

                    </Col>
                    <Col xs={{ order: 6 }} className="details-counter p-4">
                        <FontAwesomeIcon className="icons-counter" icon={faUser}></FontAwesomeIcon>

                        <h5>90+</h5>
                        <h4>Staff</h4>

                    </Col>
                    <Col xs={{ order: 6 }} className="details-counter p-4">
                        <FontAwesomeIcon className="icons-counter" icon={faSmile}></FontAwesomeIcon>

                        <h5>1000+</h5>
                        <h4>Happy Patient</h4>
                    </Col>
                    <Col xs={{ order: 1 }} className="details-counter p-4">
                        <FontAwesomeIcon className="icons-counter" icon={faProcedures}></FontAwesomeIcon>

                        <h5>130+</h5>
                        <h4>Bed Facility</h4>

                    </Col>
                </Row>
            </Container>

        </section>

    );
};

export default Counter;
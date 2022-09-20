import React from "react"
import { CgProfile } from "react-icons/cg";
import { Container, Row, Col } from "react-bootstrap"

const SubNavbar = ({ title }) => {
    return (
        <>
            <Container fluid className="pt-3">
                <h4 style={{ fontSize: '2rem' }}>Immersive Bootcamp</h4>
                <Row>
                    <Col xl={6}>
                        <p style={{ fontSize: '20px' }}>{title}</p>
                    </Col>
                    <Col xl={6}>
                        <p className="text-end"><CgProfile style={{ fontSize: '40px', paddingRight: '10px' }} /> Hello, (Your name)</p>
                    </Col>
                </Row>
                <hr /> <hr />
            </Container>
        </>
    )
}

export default SubNavbar
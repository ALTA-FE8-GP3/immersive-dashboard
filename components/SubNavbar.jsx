import React, { useState, useEffect } from "react"
import { getCookie, hasCookie } from "cookies-next"
import { CgProfile } from "react-icons/cg";
import { Container, Row, Col, Badge } from "react-bootstrap"

const SubNavbar = ({ title }) => {
    const [role, setRole] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        setRole(getCookie("role"))
        setUser(getCookie("user"))
    }, [])

    return (
        <>
            <Container fluid className="pt-3">
                <h4 style={{ fontSize: '2rem' }}>Immersive Bootcamp</h4>
                <Row>
                    <Col xl={6}>
                        <p style={{ fontSize: '20px' }}>{title}</p>
                    </Col>
                    <Col xl={6}>
                        <p className="text-end"><CgProfile style={{ fontSize: '40px', paddingRight: '10px' }} /> Hello, {user}</p>
                        <Badge bg={role === "Admin" ? "success" : "info"} className="float-end">{role}</Badge>
                    </Col>
                </Row>
                <hr /> <hr />
            </Container>
        </>
    )
}

export default SubNavbar
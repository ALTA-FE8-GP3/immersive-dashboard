import React, { useState } from 'react';
import { Button, Nav, Container, Navbar, Form, Col } from "react-bootstrap"
import { useCookies } from 'react-cookie';
import { TbLogout } from "react-icons/tb"

const Navbars = () => {
    // test
    const [login, setLogin] = useState(false)
    const [cookies, removeCookies] = useCookies();
    const handleLogout = () => {
        setLogin((prev) => !prev)
    }

    const buttonStyle = {
        backgroundColor: "#F47624",
    }

    return (
        <div>
            { login ? (
                <Navbar bg="light" expand="lg" className="shadow-sm navbar">
                    <Container fluid className="align-items-center justify-content-center">
                        <Navbar.Brand href="/" className="ms-5 ps-5 me-0">
                            <img src="/logo.png" style={{ maxWidth: 100, maxHeight: 100 }} onClick={() => navigate('/')}></img>{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="align-items-center justify-content-center">
                            <Nav className="w-75 d-xl-flex justify-content-between my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Col className="w-100 d-flex justify-content-center">
                                    <Nav.Link href="#action2" className="me-3">
                                        Dashboard
                                    </Nav.Link>
                                    <Nav.Link href="#action2" className="me-3">
                                        Mente
                                    </Nav.Link>
                                    <Nav.Link href="#action2" className="me-3">
                                        User
                                    </Nav.Link>
                                    <Nav.Link href="#action2" className="me-3">
                                        Class
                                    </Nav.Link>
                                </Col>
                                <Nav.Link href="#" className="text-dark">
                                    {!cookies ? cookies.nama : "John Doe"}
                                </Nav.Link>
                                <Button style={buttonStyle} onClick={() => handleLogout()}>
                                    <TbLogout size={20} />
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                <>
                    <Button style={buttonStyle} onClick={() => handleLogout()}>
                        <TbLogout size={20} />
                    </Button>
                </>
            )}
        </div >
    );
};

export default Navbars;
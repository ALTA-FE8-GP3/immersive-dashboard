import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Nav, Container, Navbar, Col } from "react-bootstrap"
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
    const linkStyle = {
        color: "#17345F",
        marginRight: "2rem",
        textDecoration: "none",
        marginTop: "10px"
    }

    return (
        <div>
            {!login ? (
                <Navbar bg="light" expand="lg" className="shadow-sm navbar">
                    <Container fluid className="d-md-flex align-items-center justify-content-between">
                        <Navbar.Brand href="/" className="ms-5 ps-5 me-0">
                            <img src="/logo.png" style={{ maxWidth: 100, maxHeight: 100 }} onClick={() => navigate('/')}></img>{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="align-items-center justify-content-center">
                            <Nav className="w-75 d-xl-flex justify-content-between my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Col className="w-100 d-flex justify-content-center">
                                    <Link href="/dashboard" className="me-3">
                                        <a style={linkStyle}>Dashboard</a>
                                    </Link>
                                    <Link href="/mente" className="me-3">
                                        <a style={linkStyle}>Mente</a>
                                    </Link>
                                    <Link href="/user" className="me-3">
                                        <a style={linkStyle}>User</a>
                                    </Link>
                                    <Link href="/class" className="me-3">
                                        <a style={linkStyle}>Class</a>
                                    </Link>
                                </Col>
                                <Nav.Link onClick={handleLogout} href="#">
                                    <TbLogout /> Logout
                                </Nav.Link>
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
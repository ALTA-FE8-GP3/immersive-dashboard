import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Nav, Container, Navbar, Col } from "react-bootstrap"
import { TbLogout } from "react-icons/tb"
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"
import { getCookie, deleteCookie } from "cookies-next"
import { useRouter } from 'next/router';
import { useThemeContext } from '../context/contextTheme';

const Navbars = () => {
    const { isDark, handleTheme } = useThemeContext()
    const [token, setToken] = useState()
    useEffect(() => {
        setToken(getCookie("token"))
    }, [])

    const router = useRouter()

    const handleLogout = () => {
        deleteCookie("token")
        router.push("/")
    }
    const linkStyle = {
        color: isDark ? "#F47624" : "#17345F",
        marginRight: "2rem",
        textDecoration: "none",
        marginTop: "10px"
    }

    return (
        <div>
            {(token &&
                <Navbar bg={isDark ? "dark" : "light"} expand="lg" className="shadow-sm border-bottom border-light navbar">
                    <Container fluid className="d-md-flex align-items-center justify-content-between">
                        <Navbar.Brand href="/" className="ms-5 ps-5 me-0">
                            <img alt="" src={isDark ? "/logo-2.png" : "/logo.png"} style={{ maxWidth: 100, maxHeight: 100 }} onClick={() => navigate('/')}></img>{' '}
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
                                {isDark ?
                                    <BsSunFill onClick={handleTheme} style={{cursor : "pointer"}} color='#F47624' className="me-5 mt-2" size={25} />
                                    :
                                    <BsFillMoonStarsFill onClick={handleTheme} style={{cursor : "pointer"}} color="#17345F" className="me-5 mt-2" size={25} />
                                }
                                <Nav.Link onClick={handleLogout} href="/">
                                    <TbLogout /> Logout
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) || (!token &&
                <></>
                )
            }
        </div >
    );
};

export default Navbars;
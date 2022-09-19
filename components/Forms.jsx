// Import Library
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Forms = () => {
    const spanStyle = {
        color: "#17345F",
        cursor: "pointer"
    };

    const buttonStyle = {
        width: "106px",
        backgroundColor: "#F47624"
    };

    return (
        (
            <>
                <Row>
                    <Col xl={8} className="mx-auto">
                        <h1 className="text-center" style={spanStyle}>LOGIN</h1>
                        <Form>
                            <Form.Group className="mb-2" style={spanStyle} controlId="formBasicEmail">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i className="fa fa-envelope"></i> Email
                                </Form.Label>
                                <Form.Control required name="email" style={{ height: "50px" }} type="text" placeholder="Email" aria-describedby="basic-addon1" />
                            </Form.Group>
                            <Form.Group className="mb-2" style={spanStyle} controlId="formBasicPassword">
                                <Form.Label style={{ fontSize: "20px" }}>
                                    <i className="fa fa-lock"></i> Password
                                </Form.Label>
                                <Form.Control required name="password" type="password" placeholder="Password" style={{ height: "50px" }} />
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 " controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me?" />
                            </Form.Group>
                            <Button variant="dark" style={buttonStyle} className="mt-2 ms-2" type="submit">
                                <i className="fa fa-sign-in me-1"></i> Login
                            </Button>{" "}
                            <br />
                            <br />
                        </Form>
                    </Col>
                </Row>
            </>
        )
    );
};

export default Forms;

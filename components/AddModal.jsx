import React from 'react'
import { Button, Modal, Form, Row, Col } from "react-bootstrap"

const AddModal = ({ handleShow, handleClose, show }) => {

    const test = "class"

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            (test === "user" && "Add User") ||
                            (test === "log" && "Add Log") ||
                            (test === "class" && "Add Class")
                        }
                    </Modal.Title>
                </Modal.Header>

                <Form>

                    <Modal.Body>
                        {
                            (
                                test === "user" &&
                                <Row>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Name</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Control
                                                type="text"
                                                placeholder="Input your username"
                                                autoFocus
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Email</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Control
                                                type="email"
                                                placeholder="Input your email"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Password</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Control
                                                type="text"
                                                placeholder="Input your password"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Role</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Check
                                                inline
                                                label="Admin"
                                                name="group1"
                                                type="radio"
                                            />
                                            <Form.Check
                                                inline
                                                label="User"
                                                name="group1"
                                                type="radio"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Team</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Select aria-label="Default select example">
                                                <option >Select your role</option>
                                                <option value="mentor">Mentor</option>
                                                <option value="skill">People Skill</option>
                                                <option value="placement">Placement</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Status</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Select aria-label="Default select example">
                                                <option >Select your status</option>
                                                <option value="active">Active</option>
                                                <option value="notActive">Not Active</option>
                                                <option value="deleted">Deleted</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                </Row>
                            ) || (
                                test === "log" &&
                                <Row>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Status</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Select aria-label="Default select example">
                                                <option >Select your status</option>
                                                <option value="active">Active</option>
                                                <option value="notActive">Not Active</option>
                                                <option value="deleted">Deleted</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3 row">
                                        <Col xl={2} className="pt-2">
                                            <span>File</span>
                                        </Col>
                                        <Col xl={10}>
                                            <Form.Control type="file" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Feedback</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Row>
                            ) || (
                                test === "class" &&
                                <Row>
                                    <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                                        <Col xl={2} className="pt-2">
                                            <span>Name</span>
                                        </Col>
                                        <Col xl={10} className="">
                                            <Form.Control
                                                type="text"
                                                placeholder="Input Class Name"
                                                autoFocus
                                            />
                                        </Col>
                                    </Form.Group>
                                </Row>
                            )
                        }
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>

                </Form>

            </Modal>
        </>
    );
}

export default AddModal
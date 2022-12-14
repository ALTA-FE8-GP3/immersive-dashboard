import React from "react";
import {
  Button,
  Modal,
  Form,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const AddModal = ({
  handleClose,
  show,
  add,
  user,
  handleInput,
  handleSubmit,
  handleNewClass,
  mentor,
  handleInputMentor,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {(add === "user" && "Add User / Edit User") ||
              (add === "log" && "Add Log") ||
              (add === "class" && "Add Class / Edit Class")}
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body>
            {(add === "user" && (
              <Row>
                <Form.Group
                  className="mb-3 row"
                  controlId="exampleForm.ControlInput1"
                >
                  <Col xl={2} className="pt-2">
                    <span>Name</span>
                  </Col>
                  <Col xl={10} className="">
                    <Form.Control
                      name="nama_user"
                      // value={nama_user}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      placeholder="Input your username"
                      autoFocus
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  className="mb-3 row"
                  controlId="exampleForm.ControlInput2"
                >
                  <Col xl={2} className="pt-2">
                    <span>Email</span>
                  </Col>
                  <Col xl={10} className="">
                    <Form.Control
                      name="email"
                      // value={email}
                      onChange={(e) => handleInput(e)}
                      type="email"
                      placeholder="Input your email"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  className="mb-3 row"
                  controlId="exampleForm.ControlInput3"
                >
                  <Col xl={2} className="pt-2">
                    <span>Password</span>
                  </Col>
                  <Col xl={10} className="">
                    <Form.Control
                      name="password"
                      // value={password}
                      onChange={(e) => handleInput(e)}
                      autoComplete="on"
                      type="password"
                      placeholder="Input your password"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  onChange={(e) => handleInput(e)}
                  className="mb-3 row"
                >
                  <Col xl={2} className="pt-2">
                    <span>Role</span>
                  </Col>
                  <Col xl={10} className="">
                    <Form.Check
                      value="Admin"
                      inline
                      label="Admin"
                      name="role"
                      type="radio"
                      controlId="exampleForm.ControlInput4"
                    />
                    <Form.Check
                      value="Default"
                      inline
                      label="User"
                      name="role"
                      type="radio"
                      controlId="exampleForm.ControlInput99"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  onChange={(e) => handleInput(e)}
                  className="mb-3 row"
                  controlId="exampleForm.ControlInput5"
                >
                  <Col xl={2} className="pt-2">
                    <span>Team</span>
                  </Col>
                  <Col xl={10} className="">
                    <Form.Select
                      name="team"
                      aria-label="Default select example"
                    >
                      <option>Select your Team</option>
                      <option value="Mentor">Mentor</option>
                      <option value="Skill">People Skill</option>
                      <option value="Placement">Placement</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  onChange={(e) => handleInput(e)}
                  className="mb-3 row"
                  controlId="exampleForm.ControlInput6"
                >
                  <Col xl={2} className="pt-2">
                    <span>Status</span>
                  </Col>
                  <Col xl={10} className="">
                    <Form.Select
                      name="status"
                      aria-label="Default select example"
                    >
                      <option>Select your status</option>
                      <option value="Active">Active</option>
                      <option value="Not Active">Not Active</option>
                      <option value="Deleted">Deleted</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
            )) ||
              (add === "log" && (
                <Row>
                  <Form.Group
                    className="mb-3 row"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Col xl={2} className="pt-2">
                      <span>Status</span>
                    </Col>
                    <Col xl={10} className="">
                      <Form.Select name="status" onChange={(e) => handleInput(e)} aria-label="Default select example">
                        <option>Select your status</option>
                        <option value="Active">Active</option>
                        <option value="Not Active">Not Active</option>
                        <option value="Deleted">Deleted</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-3 row"
                  >
                    <Col xl={2} className="pt-2">
                      <span>Url File</span>
                    </Col>
                    <Col xl={10}>
                      <Form.Control onChange={(e) => handleInput(e)} name="url_file" type="file" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control onChange={(e) => handleInput(e)} name="feedback" as="textarea" rows={3} />
                  </Form.Group>
                </Row>
              )) ||
              (add === "class" && (
                <Row>
                  <Form.Group
                    className="mb-3 row"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Row className="mb-2">
                      <Col xl={2} className="pt-2">
                        <span>Name</span>
                      </Col>
                      <Col xl={10} className="">
                        <Form.Control
                          type="text"
                          placeholder="Input Class Name"
                          autoFocus
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={2} className="pt-2">
                        <span>Mentor</span>
                      </Col>
                      <Col xl={10} className="">
                        <Form.Select onChange={handleInputMentor}>
                          <option value="" disabled selected>
                            Select your option
                          </option>
                          {mentor.map((Mentor) => {
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <option
                                value={Mentor.id}
                                label={Mentor.nama_user}
                              >
                                {Mentor.nama_user}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Col>
                    </Row>
                  </Form.Group>
                </Row>
              ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;

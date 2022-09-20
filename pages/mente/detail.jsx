import React, { useState } from "react"
import { Badge, Button, Col, Container, Row } from "react-bootstrap"
import AddModal from "../../components/AddModal";
import SubNavbar from "../../components/SubNavbar"

const Detail = () => {

    // Dont distract
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const buttonStyle = { width: "10%", backgroundColor: "#F47624", borderColor: "#F47624" }

    return (
        <>
            <style jsx>
                {`
            p,h2,span {
                color : #17345F;
            }
            h5 {
                color : #F47624
            }
        `}
            </style>
            <div>
                <div className="px-3">
                    <SubNavbar title="Mentee Log" />
                    <Row className="px-5 mt-4 d-xl-flex justify-content-between">
                        <Col xl={4}>
                            <h2 className="fw-bold">Ujang saparapat</h2>
                            <span>Front - End Batch 08</span> <br /> <br />
                            <h5>IPA</h5>
                            <h5>SMA Negeri 4 Surabaya</h5>
                        </Col>
                        <Col xl={3}>
                            <p><b className="me-3">Phone</b> : 08123456789</p>
                            <p><b>Telegram</b> : @ujang</p>
                            <p><b className="me-3">Discord</b>: @ujangdc</p>
                            <p><b className="me-4">Emaill</b> : ujang@gmail.com</p>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col>
                                <Button onClick={handleShow} style={buttonStyle} className="float-end my-5">Add Log</Button>
                            </Col>
                        </Row>
                        <Row className="shadow-sm py-1 mb-5" style={{ maxHeight: "12rem", minHeight: "12rem" }}>
                            <Col className="text-end pe-4 d-md-flex d-xl-block justify-content-between" xl={3}>
                                <h5 className="fw-bold">Tatang Suratang</h5>
                                <p className="mb-5">20 Sept 2022</p>
                                <Badge bg="danger fs-6 py-md-4 mt-xl-3 pt-xl-2" style={{maxHeight : "10px"}}>Repeat Unit 1</Badge>
                            </Col>
                            <Col className="border-start border-2 mb-5 " xl={9}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque autem inventore, quod eos reprehenderit architecto ducimus modi delectus! Assumenda pariatur deserunt recusandae nihil id iure quaerat rem molestias quibusdam voluptatibus. Neque perspiciatis cum id aperiam alias in maxime iure quisquam? Ab in excepturi voluptatibus iure nisi dolorem tempora magni.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque autem inventore, quod eos reprehenderit architecto ducimus modi delectus! Assumenda pariatur deserunt recusandae nihil id iure quaerat rem
                                </p>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>

            {/* Modal */}
            <AddModal
                add="log"
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
        </>
    )
}

export default Detail
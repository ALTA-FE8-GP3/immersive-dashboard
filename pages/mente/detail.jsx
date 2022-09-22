import React, { useEffect, useState } from "react"
import { Badge, Button, Col, Container, Row } from "react-bootstrap"
import { useThemeContext } from "../../context/contextTheme";
import AddModal from "../../components/AddModal";
import SubNavbar from "../../components/SubNavbar"
import { useRouter } from "next/router";
import axios from "axios";

const Detail = () => {

    // Dont distract
    const router = useRouter()
    const { query: { id } } = router
    console.log(id)
    const [inputLog, setInputLog] = useState({
        status: "",
        feedback: "",
        url_file: "",
        status: ""
    })
    const { isDark } = useThemeContext()
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState()
    const [log, setLog] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const buttonStyle = { width: "10%", backgroundColor: "#F47624", borderColor: "#F47624" }

    const getApiDetail = async () => {
        await axios.get(`https://grupproject.site/mentee/${id}`)
            .then((res) => {
                setDetail(res.data.data)
                setLoading(false)
            })
            .catch(err => console.log(err.response.data))
    }
    const getApiLog = async () => {
        await axios.get("https://grupproject.site/log")
            .then(res => {
                setLog(res.data.data)
                console.log(res.data.data)
            })
            .catch(err => console.log(err.response.data))
    }
    useEffect(() => {
        getApiLog()
    }, [])
    useEffect(() => {
        getApiDetail()
    }, [])

    const handleInput = (e) => {
        let newInputLog = { ...inputLog }
        newInputLog[e.target.name] = e.target.value
        setInputLog(newInputLog)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = JSON.stringify({
            user_id: parseInt(10),
            status: inputLog.status,
            mentee_id: parseInt(id),
            feedback: inputLog.feedback,
            url_file: inputLog.url_file,
            status: inputLog.status
        })
        console.log(data)
        axios.post("https://grupproject.site/log", data,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then((res) => console.log(res))
            .catch(err => console.log(err.response.data))
    }

    return (
        <>
            <style jsx>
                {`
            p,h2,span {
                color : ${isDark ? "#F47624" : "#17345F"};
            }
            h5 {
                color : ${isDark ? "white" : "#F47624"}
            }
        `}
            </style>
            <div className={isDark ? "bg-dark text-white" : ""} style={{ minHeight: "120vh" }}>
                <div className="px-3">
                    <SubNavbar title="Mentee Log" />
                    {!loading ?
                        <Row className="px-5 mt-4 d-xl-flex justify-content-between">
                            <Col xl={4}>
                                <h2 className="fw-bold">{detail.nama_mentee}</h2>
                                <span>{detail.nama_class}</span> <br /> <br />
                                <h5>{detail.major}</h5>
                                <h5>{detail.graduate}</h5>
                            </Col>
                            <Col xl={3}>
                                <p><b className="me-3">Phone</b> : {detail.phone}</p>
                                <p><b>Telegram</b> : {detail.telegram}</p>
                                <p><b className="me-3">Discord</b>: {detail.discord}</p>
                                <p><b className="me-4">Emaill</b> : {detail.email}</p>
                            </Col>
                        </Row> : ""}
                    <Container>
                        <Row>
                            <Col>
                                <Button onClick={handleShow} style={buttonStyle} className="float-end my-5">Add Log</Button>
                            </Col>
                        </Row>
                        {!loading ? log.map((obj, index) => {
                            return (
                                <Row key={index} className=" shadow-sm py-1 mb-5" style={{ maxHeight: "12rem", minHeight: "12rem" }}>

                                    <Col className="text-end pe-4 d-sm-flex d-xl-block justify-content-between" xl={3}>
                                        <h5 className="fw-bold">{obj.nama_user}</h5>
                                        <p className="mb-5">{obj.created_at}</p>
                                        <Badge bg="danger fs-6 py-md-4 mt-xl-3 pt-xl-2" style={{ maxHeight: "10px" }}>{obj.status}</Badge>
                                    </Col>
                                    <Col className="border-start border-2 mb-5 " xl={9}>
                                        <p>{obj.feedback}</p>
                                    </Col>

                                </Row>
                            )
                        }) : ""}
                    </Container>
                </div>
            </div>

            {/* Modal */}
            <AddModal
                add="log"
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Detail
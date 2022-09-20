
import Link from "next/link"
import React from "react"
import { Col, Row } from "react-bootstrap"

const Four = () => {

    const wrapper = {
        minHeight: "80vh",
        minWidth: "100%",
        backgroundImage: "url(/404.png)",
        backgroundSize : "contain"
    }
    const subWrapper = {
        marginTop: "35vh",
        color : "#17345F"
    }

    return (
        <>
            <center>
                <Row style={wrapper}>
                    <Col xl={7} className="mx-auto" style={subWrapper}>
                        <h1>Halamannya gak ada,coba cek lagi url nya atau balik</h1>
                        <Link href="/">
                            <a><h1>Ke Home</h1></a>
                        </Link>
                    </Col>
                </Row>
            </center>
        </>
    )
}

export default Four
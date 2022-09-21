import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import Forms from "../components/Forms"

const index = () => {

  const [user, setUser] = useState()

  

  return (
    <>
      <Row className="pb-5 pt-5" style={{ backgroundImage: `url("/background.png")`, minHeight: "39rem" }}>
        <Col xl={6} >
          <img src="/logo.png" alt="pazarLogo" className=" d-block mx-auto" style={{ marginTop: "4rem", width: "60%" }} />
        </Col>
        <Col xl={6} className="mt-5">
          <Forms
            user={user}
          />
        </Col>
      </Row>
    </>
  )
}

export default index
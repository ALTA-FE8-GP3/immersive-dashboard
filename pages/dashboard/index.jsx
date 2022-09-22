// Import Library
import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { BsFillPersonXFill, BsFillPersonCheckFill } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";
// Import Components
import SubNavbar from "../../components/SubNavbar";
import { useThemeContext } from "../../context/contextTheme";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Index = () => {
  // Initiate style
  const { isDark } = useThemeContext();
  const iconCheck = <BsFillPersonCheckFill color="#2CAF32" size={50} />;
  const iconX = <BsFillPersonXFill color="#FE5462" size={50} />;
  const iconRepeat = <TbRepeat color="white" size={50} />;
  const checkStyle = {
    color: "#2CAF32",
    backgroundColor: "#17345F",
    cursor: "pointer",
  };
  const xStyle = {
    color: "#FE5462",
    backgroundColor: "#17345F",
    cursor: "pointer",
  };
  const repeatStyle = {
    color: "white",
    backgroundColor: "#F47624",
    cursor: "pointer",
  };

  return (
    <div>
      <div
        className={isDark ? "bg-dark text-white px-3" : "px-3"}
        style={{ minHeight: "100vh" }}
      >
        <SubNavbar title="Dashboard" />
        <Row className="d-xl-flex justify-content-center mt-4 ">
          {[
            { icon: iconCheck, text: "Joined Class", style: checkStyle },
            { icon: iconRepeat, text: "Repeated Unit", style: repeatStyle },
            { icon: iconX, text: "Eliminated", style: xStyle },
          ].map((item, index) => {
            const { icon, text, style } = item;
            return (
              <Col className="mt-3" key={index} xl={4}>
                <Card
                  style={{ width: "18rem", height: "8rem" }}
                  className="mb-2 mx-auto"
                >
                  <Card.Body style={style} className="rounded shadow-sm">
                    <Card.Title className="row pt-3">
                      <Col xs={5} xl={5} className="px-5">
                        {icon}
                      </Col>
                      <Col xs={7} xl={7} className="py-3">
                        <span>{text}</span>
                      </Col>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Index;

// Import Library
import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { BsFillPersonXFill, BsFillPersonCheckFill } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// Import Components
import SubNavbar from '../../components/SubNavbar'
import { useThemeContext } from "../../context/contextTheme";

const Index = () => {
  // Initiate style
  const { isDark } = useThemeContext()
  const iconCheck = <BsFillPersonCheckFill color='#2CAF32' size={50} />
  const iconX = <BsFillPersonXFill color="#FE5462" size={50} />
  const iconRepeat = <TbRepeat color='white' size={50} />
  const checkStyle = { color: '#2CAF32', backgroundColor: "#17345F", cursor: "pointer" }
  const xStyle = { color: "#FE5462", backgroundColor: "#17345F", cursor: "pointer" }
  const repeatStyle = { color: 'white', backgroundColor: "#F47624", cursor: "pointer" }

  const data = [
    {
      name: "Januari",
      register: 4000,
      graduates: 2400,
      placement: 2400,
    },
    {
      name: "Februari",
      register: 3000,
      graduates: 1398,
      placement: 2210,
    },
    {
      name: "Maret",
      register: 2000,
      graduates: 9800,
      placement: 2290,
    },
    {
      name: "April",
      register: 2780,
      graduates: 3908,
      placement: 2000,
    },
    {
      name: "Mei",
      register: 1890,
      graduates: 4800,
      placement: 2181,
    },
    {
      name: "Juni",
      register: 2390,
      graduates: 3800,
      placement: 2500,
    },
    {
      name: "Juli",
      register: 3490,
      graduates: 4300,
      placement: 2100,
    },
  ];

  return (
    <div>
      <div className={isDark ? "bg-dark text-white px-3" : "px-3"} style={{ minHeight: "100vh" }}>
        <SubNavbar title="Dashboard" />
        <Row className="d-xl-flex justify-content-center mt-4 mb-5">
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
        {/* <Row className="justify-content-center">
          <LineChart
            width={1000}
            height={450}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="graduates"
              stroke="#17345f"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="register" stroke="green" />
            <Line type="monotone" dataKey="placement" stroke="#f47624" />
          </LineChart>
        </Row> */}
      </div>
    </div>
  );
};

export default Index;

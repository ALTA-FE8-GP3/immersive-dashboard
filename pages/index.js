import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Forms from "../components/Forms";
import React from "react";
import { setCookie, getCookie } from "cookies-next";
import axios from "axios";

const Index = () => {
  const [role, setRole] = useState()
  useEffect(() => {
    setRole(getCookie("role"))
  })
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user.email, user.password);

  const handleLogin = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: user.email,
      password: user.password,
    });

    var config = {
      method: "post",
      url: "http://grupproject.site/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setCookie("token", response.data.Token);
        setCookie("role", response.data.Role);
        alert(`Login as ${role}`);
        location.href = "/dashboard"
      })
      .catch(function (error) {
        alert("Email / Password salah")
        console.log(error.response.data);
      });
  };

  const inputLogin = (e) => {
    let newLogin = { ...user };
    newLogin[e.target.name] = e.target.value;
    setUser(newLogin);
  };

  return (
    <>
      <Row
        className="pb-5 pt-5"
        style={{
          backgroundImage: `url("/background.png")`,
          minHeight: "39rem",
        }}
      >
        <Col xl={6}>
          <img
            src="/logo.png"
            alt="Logo"
            className=" d-block mx-auto"
            style={{ marginTop: "4rem", width: "60%" }}
          />
        </Col>
        <Col xl={6} className="mt-5">
          <Forms
            user={user}
            handleLogin={handleLogin}
            inputLogin={inputLogin}
          />
        </Col>
      </Row>
    </>
  );
};

export default Index;

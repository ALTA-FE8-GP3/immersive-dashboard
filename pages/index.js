import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Forms from "../components/Forms";
import React from "react";
import { setCookie, getCookie } from "cookies-next";
import axios from "axios";

const Index = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState()
  useEffect(() => {
    setToken(getCookie("token"))
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: user.email,
      password: user.password,
    });

    var config = {
      method: "post",
      url: "https://grupproject.site/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setCookie("token", response.data.token);
        setCookie("role", response.data.role);
        setCookie("user",response.data.user)
        alert(response.data.message);
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
          {token ?
            <div>
              <div>
                <h1 className="text-center w-75 mx-auto fw-bold" style={{ color: "#17345F" }}>Welcome to <span style={{ color: "#F47624" }}>Immersive Dashboard</span></h1>
                <img src="/landing.png" width={350} height={300} className="mx-auto d-block" />
              </div>
            </div> : <Forms
              user={user}
              handleLogin={handleLogin}
              inputLogin={inputLogin}
            />
          }



        </Col>
      </Row>
    </>
  );
};

export default Index;

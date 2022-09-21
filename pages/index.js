import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Forms from "../components/Forms";
import React from "react";
import { setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
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
        console.log(JSON.stringify(response.data));
        setCookie("token", response.data.Token);
        setCookie("role", response.data.Role);
        alert(response.data.Message);
        router.push("/dashboard")
      })
      .catch(function (error) {
        alert("Email / Password salah")
        console.log(error);
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
            alt="pazarLogo"
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

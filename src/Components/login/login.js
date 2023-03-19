import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import LoginImage from "../../Images/login.png";
import Navigation from "../Navigation/Navigation";
import SetCookie from "../../hooks/SetCookie";
import { loginmetamask } from "../testing/loginmetamask";
import { useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const logs = () => {
    loginmetamask().then((e) => {
      if (e === null) {
        alert("you should connect to metamask then try to login again ");
      } else {
        setState(true);
        navigate("/minerPage");
      }
    });
  };
  /*
  useEffect(() => {
    loginmetamask().then((e) => {
      console.log(e);
    });
  });
*/
  return (
    <>
      <Navigation />
      <Container className="mt-5 ">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3 borders">
            <br></br>
            <br></br>
            <br></br>
            <p className="login"> Login with metamask </p>

            <Button
              variant="primary btn-block w-100"
              className="mb23"
              onClick={() => {
                logs();
              }}
            >
              Login
            </Button>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img
              src={LoginImage}
              alt="sorry"
              className="w-100  mx-auto d-block LogImage"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

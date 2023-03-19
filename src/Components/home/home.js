import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import HomeImage from "../../Images/certification_login.png";
import "./home.css";
function home() {
  return (
    <>
      <Navigation />
      <Container className="mt-5 ">
        <Row>
          <Col lg={4} md={6} sm={12} className=" align-self-center">
            <h3 className="center">Cryptography and Security Project </h3>
            <p className="center">
              This web application is used to digitize, authenticate and verify
              university diplomas using blockchain technology.
            </p>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img
              src={HomeImage}
              alt="home page "
              className="w-100 mx-auto d-block HomeImage"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default home;

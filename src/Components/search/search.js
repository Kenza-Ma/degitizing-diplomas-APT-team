import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Stack } from "react-bootstrap";
import "./search.css";
import ImageDegree from "../../Images/graduation-hat.png";
import Navigation from "../Navigation/Navigation";
import { verify } from "../testing/verify";

function Search() {
  const [value, setValue] = useState(0);

  const handle = () => {
    /* setsh(!sh);
    setValue("diplome verified");*/

    /* this is where we gonna interact with our smart contract ! */
    verify(value);
  };
  return (
    <>
      <Navigation />
      <Container className="pos">
        <Row>
          <Col className="text-center">
            <img src={ImageDegree} className="degree" alt="not found" />
            <h2 className="proof">Verify the diploma</h2>
            <Stack direction="horizontal" gap={3} className="ms-auto okk">
              <Form.Control
                pattern="[0-9]*"
                className=" ok"
                placeholder="Insert student's id "
                onChange={(e) =>
                  setValue((v) =>
                    e.target.validity.valid ? e.target.value : v
                  )
                }
              />
              <Button
                variant="primary"
                onClick={() => {
                  handle();
                }}
                className="endis1"
              >
                Verify
              </Button>
              {/*
              <div className="vr" />
              */}
              <Button
                variant="secondary"
                className="endis"
                hidden="hidden"
                disabled={true}
              >
                Show
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Search;

import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const Form = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col>
          <input type="text" placeholder="First Name*" />
        </Col>
        <Col>
          <input type="text" placeholder="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="email" placeholder="Email" />
        </Col>
      </Row>

      <br />

      <button type="submit">Submit</button>
    </div>
  );
};

export default Form;

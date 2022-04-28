import React from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

const current = new Date();
const date = `${current.getFullYear()}`;

function Footer() {
  return (
    <Col className="Footer">
      <center>Chaz Cosby &copy;{date}</center>
    </Col>
  );
}

export default Footer;

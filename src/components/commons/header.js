import React from "react";
import { Row, Col } from 'react-bootstrap';

const Header = (props) => {

  return (
    <Row className="header">
      <Col sm="3">
        <div className="logo"></div>
      </Col>
      <Col className="text-centered" sm="9">
        <h6 className="title">RESULTADOS ELECCIONES LEGISLATIVAS 06 DE JUNIO DEL 2021</h6>
      </Col>
    </Row>
  );
};

export default Header;
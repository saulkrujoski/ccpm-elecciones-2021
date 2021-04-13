import React from "react";
import { Row, Col } from 'react-bootstrap';

const Header = (props) => {

  return (
    <Row className="header">
      <div className="header-logo-content">
        <div className="logo"></div>
      </div>
      <div className="header-description">
        <h6 className="header-title">RESULTADOS ELECCIONES LEGISLATIVAS 06 DE JUNIO DEL 2021</h6>
      </div>
    </Row>
  );
};

export default Header;
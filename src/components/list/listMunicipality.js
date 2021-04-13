import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { isNonEmptyArray } from "./../../utils/utils";

const ListMunicipality = (props) => {
  const { elements, label, headerTitle } = props;
  const hasElements = isNonEmptyArray(elements);
console.log("--- PROPIEDADES ---",props);
  return (
    <>
    { hasElements ?
      <Row variant={"success"}>
        <Col xs='12' className="centered-content">
          <Dropdown>
            <Dropdown.Toggle variant="Primary" id="dropdown-municipality">
              { label ? label : "Seleccione un elemento..."}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>{ headerTitle ? headerTitle : "Estos son los elementos" }</Dropdown.Header>
              { elements ?  
                elements.map((o) => (
                  <Dropdown.Item href={"#/municipality/".concat(o.key.toString())}>{o.text}</Dropdown.Item>
                ))
              : null }
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    : 
      null
    }
    </>
  );
};

export default ListMunicipality;
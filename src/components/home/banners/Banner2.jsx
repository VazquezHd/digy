import "./banners.css";

import { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

export function Banner2() {
  return (
    <section id="banner2" className="espacios-arriba-abajo">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center" xl={12}>
            {" "}
            <img
              src="https://media.gcflearnfree.org/content/559ae882607fbe195c5d135d_07_06_2015/connectingtotheinternet_image.png"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

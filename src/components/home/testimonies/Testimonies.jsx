import { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import UncontrolledExample from "./Carousel";
//import './solutions.css'
//import solutions from "./data.json"
//import { SolutionCard } from "./cards";

export function Testimonies() {
  return (
    <section className="testimonies d-flex align-items-center">
      <Container className="">
        <Row className="text-center">
          <Col xl={6}>
            <h1>Clientes que confían en nosotros</h1>
            <p>Servnet cuenta con la infraestructura tecnológica y humana para poder brindar el mejor servicio del mercado. Reconocemos que cada cliente es diferente, por lo que la atención personalizada es un aspecto importante de nuestro servicio de excelencia.</p>
          </Col>
          <Col xl={6}>
            <UncontrolledExample/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import {TestimoniesCarousel} from "./Carousel";
import './testimonies.css'
//import solutions from "./data.json"
//import { SolutionCard } from "./cards";

export function Testimonies() {
  return (
    <section id="testimonies" className="espacios-arriba-abajo">
      <Container>
        <Row className="justify-content-center">
          <Col xl={5} className="">
            <h1>Clientes que confían en nosotros</h1>
            <p>
              Servnet cuenta con la infraestructura tecnológica y humana para
              poder brindar el mejor servicio del mercado. Reconocemos que cada
              cliente es diferente, por lo que la atención personalizada es un
              aspecto importante de nuestro servicio de excelencia.
            </p>
          </Col>
          <Col xl={5}>
            <TestimoniesCarousel />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

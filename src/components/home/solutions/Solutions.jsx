import { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./solutions.css";
import solutions from "./data.json";
import { SolutionCard } from "./cards";

export function Solutions() {
  return (
    <section id="solutions" className="espacios-arriba-abajo">
      <Container>
        <Row>
          <Col xl={12} className="text-center">
            <h2>Soluciones Estratégicas</h2>
          </Col>
          {solutions.map((solution, index) => (
            <Col md={6} xl={3} className="solution-card-col">
              <SolutionCard solution={solution} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

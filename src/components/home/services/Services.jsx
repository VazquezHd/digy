import "./services.css";
import "./../home.css";
import miImagen from '../../../assets/mapa-cobertura.png';

import { Col, Row, Container } from "react-bootstrap";

export function Services() {
  return (
    <section id="services" className="espacios-arriba-abajo">
      <Container>
        <Row>
          <Col className="mapa" xl={6}><img src={miImagen} alt="Descripción de la imagen" /></Col>
          <Col xl={6}>
            <h2><b>Somos el socio ideal para proveer
servicios de conectividad</b></h2>
            <p ><h4>
            Diseñamos soluciones administradas a la medida,
gracias a nuestra propia infraestructura.</h4>
            </p>
            
            <Row>
              <Col md={6}>
                <ul>
                  <li>Internet Dedicado</li>
                  <li>PaaS</li>
                  <li>Telefonía VoIP</li>
                  <li>Dominios</li>
                  <li>Circuito Cerrado de vigilancia</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>IaaS</li>
                  <li>Mail corporativo</li>
                  <li>Cloud Público</li>
                  <li>Web Hosting</li>
                  <li>Servidores Bare Metal</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

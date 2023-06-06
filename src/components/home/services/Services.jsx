import "./services.css";
import "./../home.css";

import { Col, Row, Container } from "react-bootstrap";

export function Services() {
  return (
    <section id="services" className="espacios-arriba-abajo">
      <Container>
        <Row>
          <Col xl={6}>Aqui va una imagen</Col>
          <Col xl={6}>
            <h1>Somos tu socio clave de Cloud y Telecom</h1>
            Administramos más de ~5,218 kilómetros de fibra óptica en el país,
            gracias a nuestra infraestructura propia y al acuerdo comercial con
            los principales carriers de México, para llevarte la mejor calidad
            de enlaces dedicados. Asimismo, nuestro Data Center de clase
            mundial, nos convierte en tu socio estratégico de TI, con soluciones
            integrales en Cloud.
            <Row>
              <Col md={6}>
                <ul>
                  <li>Internet Dedicado</li>
                  <li>Data Center</li>
                  <li>PaaS</li>
                  <li>Cloud Privado</li>
                  <li>Dominios</li>
                  <li>VoIP + MTeams</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>Telefonía VoIP</li>
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

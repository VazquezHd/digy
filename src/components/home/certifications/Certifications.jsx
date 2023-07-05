import { Col, Row, Container } from "react-bootstrap";
import { Gallery } from "./Gallery";
import "./certifications.css";


export function Certifications() {
  return (
    <section id="certifications" className="espacios-arriba-abajo">
      <Container>
        <Row className="text-center justify-content-center ">
          <Col sm={12} xl={10}>
            <h2>Certificaciones Internacionales y Alianzas</h2>
            <p>Nuestro equipo está certificado por las mejores marcas de tecnología e infraestructura telecom del mundo, además, tenemos alianzas estratégicas con los proveedores líderes del mercado, para ofrecerle a tu empresa justo lo que necesita.</p>
            <Gallery/>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
}
import { Col, Row, Container } from "react-bootstrap";
import './service.css'


export const DescrtiptionService = ({ name, subtitle, text }) => {
  return (
    <section id="description-service" >
      <Container>
        <Row >
          <Col sm={12} xl={6}>
          <p>{name}</p>
            <h2>{subtitle}</h2>
            
          
          </Col>
          <Col sm={12} xl={6}>
            <p>{text}</p>
            
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};
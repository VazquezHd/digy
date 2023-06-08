import { Col, Row, Container, Button } from "react-bootstrap";
import './service.css'


export const IntroductionService = ({ name, description }) => {
  return (
    <section id="introduction-service" className="">
      <Container>
        <Row className="text-center justify-content-center ">
          <Col sm={12}>
            <h1>{name}</h1>
            <p className="description">{description}</p>
            <Button variant="danger" size="lg" >Cotiza</Button>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

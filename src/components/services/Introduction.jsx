import { Col, Row, Container } from "react-bootstrap";
import './service.css'
import { ContactUsButton } from "../common/buttons/ContactUsButton";

export const IntroductionService = ({ name, description }) => {
  return (
    <section id="introduction-service" className="">
      <Container>
        <Row className="text-center justify-content-center ">
          <Col sm={12}>
            <h1>{name}</h1>
            <p className="description">{description}</p>
            <ContactUsButton message={"Cotiza"}/>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

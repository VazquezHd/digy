import { Col, Row, Container } from "react-bootstrap";
import './service.css'


export const DescrtiptionService = ({ name, subtitle, text, img }) => {
  return (
    <section id="description-service" >
      <Container>
        <Row >
          <Col sm={12} xl={6}>
          <p>{name}</p>
            <h2>{subtitle}</h2>
        
            <img src={img} alt="img" className="img-fluid w-75 mx-auto d-block" />
        
            
          
          </Col>
          <Col sm={12} xl={6}>
            <p>{text}</p>
            
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};
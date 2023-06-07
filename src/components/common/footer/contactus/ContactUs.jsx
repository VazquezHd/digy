import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './contactus.css'


export const ContactUs = () => {
  return (
    <section id="contact-us" className="espacios-arriba-abajo">
      <Container>
        <Row className="">
          <Col xl={12} className="text-center">
            <h2>Contactanos</h2>
            <p>¿Necesitas que alguien te ayude con tu transformación tecnológica? Sin importar la razón, envíanos un mensaje y un especialista se pondrá en contacto contigo.</p>
            </Col>
            <Col xl={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="Apellidos" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formCompany">
                <Form.Label>Empresa</Form.Label>
                <Form.Control type="text" placeholder="Empresa" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

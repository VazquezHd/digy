import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./contactus.css";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  function sendEmail(e) {
    console.log("sendemail", e.target);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        e.target,
        "User_key"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  }

  return (
    <section id="contact-us" className="espacios-arriba-abajo">
      <Container>
        <Row className="">
          <Col xl={12} className="text-center">
            <h2>Contactanos</h2>
            <p>
              ¿Necesitas que alguien te ayude con tu transformación tecnológica?
              Sin importar la razón, envíanos un mensaje y un especialista se
              pondrá en contacto contigo.
            </p>
          </Col>
          <Col xl={12}>
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre completo"
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" name="phone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCompany">
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Empresa"
                  name="company"
                />
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

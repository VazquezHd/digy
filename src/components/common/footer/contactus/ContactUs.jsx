import { Col, Row, Container, Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./contactus.css";
import emailjs from "emailjs-com";
import React, { useState } from 'react';







export const ContactUs = () => {

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');


  function sendEmail(e) {
    const emailjs_service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjs_template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjs_user_key = process.env.REACT_APP_EMAILJS_USER_kEY;
    e.preventDefault();

    emailjs
      .sendForm(
        emailjs_service_id,
        emailjs_template_id,
        e.target,
        emailjs_user_key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          setMessage('El formulario se envió correctamente.');
          setShowModal(true);
        },
        (error) => {
          console.error("Error sending email:", error);
          setMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
      setShowModal(true);

        }
      );
  }


  const AlertModal = () => {
    return (
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  };



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
            <AlertModal />

          </Col>
        </Row>
      </Container>
    </section>
  );
};

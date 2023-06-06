import "./experience.css";

import { useEffect, useState, useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";

export function Experience() {
  const [clients, setClients] = useState(0);
  const [retention, setRetention] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [links, setLinks] = useState(0);

  //Clients
  useEffect(() => {
    const timer = setInterval(() => {
      setClients((prevCount) => prevCount + 10);
    }, 10);

    if (clients === 1200) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [clients]);

  //Retention
  useEffect(() => {
    const timer = setInterval(() => {
      setRetention((prevCount) => prevCount + 1);
    }, 10);

    if (retention === 99) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [retention]);

  //Speed
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeed((prevCount) => prevCount + 1);
    }, 100);

    if (speed === 20) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [speed]);

  // Links
  useEffect(() => {
    const timer = setInterval(() => {
      setLinks((prevCount) => prevCount + 10);
    }, 10);

    if (links === 1000) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [links]);

  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        } else {
          setClients(0);
          setRetention(0);
          setSpeed(0);
          setLinks(0);
        }
      });
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [clients, retention, speed, links]);

  return (
    <section id="experience" className="espacios-arriba-abajo">
      <Container>
        <Row>
          <Col xl={6}>
            <p>Tenemos las credenciales</p>

            <h2>Servnet te conviene</h2>
          </Col>
          <Col xl={6} className="experience-box">
            <p>Experiencia</p>
            <h1> +25 años</h1>

            <p>
              Como equipo Servnet, nuestra promesa ante clientes es otorgar un
              servicio boutique con una calidad impecable, transparencia
              absoluta y optimizando costos con soluciones inteligentes.
            </p>
          </Col>
        </Row>
        <Row className="numeric-data-row">
        <Col xs={6} xl={3} ref={counterRef}>
            {" "}
            <h2>+{clients}</h2>
            <p>Clientes</p>
          </Col>
          <Col xs={6} xl={3}><h2>{retention}%</h2> <p>Retención de clientes</p> </Col>
          <Col xs={6} xl={3}><h2>{speed}gb/s</h2> <p> Velocidades hasta</p> </Col>
          <Col xs={6} xl={3}> <h2>+{links}</h2> <p>Enlaces operando</p> </Col>
        </Row>
      </Container>
    </section>
  );
}

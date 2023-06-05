import "./banner.css";

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
    <section className="experience d-flex align-items-center">
      <Container className="">
        <Row className="">
          <Col xl={6}>
            Tenemos las credenciales
            <br />
            Servnet te conviene
          </Col>
          <Col xl={6}>
            Experiencia
            <br />
            +25 años
            <br />
            Como equipo Servnet, nuestra promesa ante clientes es otorgar un
            servicio boutique con una calidad impecable, transparencia absoluta
            y optimizando costos con soluciones inteligentes.
          </Col>
          <Col xl={3} ref={counterRef}>
            {" "}
            {clients} Clientes
          </Col>
          <Col xl={3}>{retention}% Retención de clientes</Col>
          <Col xl={3}>{speed} gb/s Velocidades hasta</Col>
          <Col xl={3}>+{links} Enlaces operando</Col>
        </Row>
      </Container>
    </section>
  );
}

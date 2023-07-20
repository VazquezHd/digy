import { Col, Row, Container } from "react-bootstrap";
import "./solutions.css";
// import solutions from "./data.json";
import { SolutionCard } from "./cards";
import img1 from "../../../assets/img-digy1.png"
import img2 from "../../../assets/img-digy2.png"
import img3 from "../../../assets/img-digy3.png"
import img4 from "../../../assets/img-digy4.png"

export function Solutions() {
  const solutions = [{
    "name": "Internet Dedicado ",
    "description": "Somos la solución de conectividad, contamos con una infraestructura muy peculiar, asegurando la mayor calidad.Nuestro servicio provee una conexión exclusiva, resevada para nuestros usuarios que solicitan alta capacidad y disponibilidad de navegación, de manera dedicada simétrica. Nuestra conexión entre dos puntos hace que el servicio esté disponible las 24 horas del día, 7 días a la semana.",
    "img": img1,    },
    {
      "name": "Soluciones Llave en Mano ",
      "description": "Estamos especializados en el diseño e implantación de soluciones de integración que permiten generar ahorros a los clientes y mejorar sus comunicaciones y la productividad de sus negocios:  • Comunicaciones Corporativas (Redes de Voz y Datos) • Electrónica de Red • Radioenlaces • Sistemas de Video vigilancia y Control de Accesos • Acceso a Internet Inalámbrico.",
      "img": img2,    },
      {
        "name": "Consultoría TI ",
        "description": "El servicio incluye la atención proactiva al cliente, la tramitación, seguimiento de incidencias y elaboración de informes. Sobre este servicio se puede añadir la gestión y administración remotas en caso de que sea técnicamente posible y/o la asistencia in-situ. ",
        "img": img3,    },
        {
          "name": "Redes SD-WAN ",
          "img": img4,
          "description": "Estamos especializados en el diseño e implantación de soluciones de integración que permiten generar ahorros a los clientes y mejorar sus comunicaciones y la productividad de sus negocios:• Comunicaciones Corporativas (Redes de Voz y Datos) • Electrónica de Red • Radioenlaces • Sistemas de Video vigilancia y Control de Accesos • Acceso a Internet Inalámbrico.", }
  ]

  return (
    <section id="solutions" className="espacios-arriba-abajo">
      <Container>
        <Row>
          <Col xl={12} className="text-center">
            <h2>Soluciones Esenciales</h2>
          </Col>
          {solutions.map((solution, index) => (
            <Col md={6} xl={3} className="solution-card-col" key={index}>
              <SolutionCard solution={solution} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

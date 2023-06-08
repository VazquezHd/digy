import "./contact.css";
import { Col, Row, Container } from "react-bootstrap";
<link rel="stylesheet" href="https://fontawesome.com/icons/facebook?f=brands&s=solid&an=flip&pc=%23b30000" />
export const Contact = () => {
return (
    <footer className="bg-dark text-white">
    <div className="container">
        <div className="row">
          {/* logo */}
        <a
            href="#"
            className="col3 text-reset text-uppercase d-flex align-items-center">
            <img src="./logo-bco.png" alt="logo" class="img-logo mr-2" />
        </a>
          {/* menu */}
        <ul className="col-3 list-unstyled">
            <li className="font-weight-bold-uppercase">Direcciones</li>
            <li>
            <a href="#" className="text-reset"></a>MATRIZ DIGY NETWORKS TUXPAN
            Demetrio Ruiz Malerva #65 Local 5E Col. Zapote Gordo Tuxpan,
            Veracruz Tel: 01 800 838 62 53 Números de Soporte 783 834 0006,
            7838359700 ó 7838340009
            </li>
            <li>
            <a href="#" className="text-reset"></a>SUCURSAL ACTOPAN HIDALGO
Calle Hidalgo No. 175
Col. Rojo Gómez 
Actopan, Hidalgo
            </li>
            <li>
            <a href="#" className="text-reset"></a>SUCURSAL HUAUCHINANGO, PUEBLA
Calle Juárez No. 29
Col. Centro
Huauchinango, Puebla
            </li>
            <li>
            <a href="#" className="text-reset"></a>SUCURSAL LLANO ENMEDIO
Avenida Independencia No. 75 Primer Piso
Colonia Centro
Localidad Llano Enmedio, Municipio de Ixhuatlán de Madero, Veracruz
Whatsaap 7461135308
            7838359700 ó 7838340009
            </li>
        </ul>
          {/* menu */}
        <ul className="col-3 list-unstyled">
            <li className="font-weight-bold-uppercase">Digy cloud</li>

            <li><a href="#" className="text-reset">Jelastic</a></li>
            <li><a href="#" className="text-reset">Cloud Público</a></li>
            <li><a href="#" className="text-reset">Cloud Privado</a></li>
            <li><a href="#" className="text-reset">Red Hat CCSP</a></li>
            <li><a href="#" className="text-reset">Red Hat OpenStack Platform</a></li>
        </ul>
         {/* menu */}
        <ul className="col-3 list-unstyled">
            <li className="font-weight-bold-uppercase">Telefonia digital</li>

            <li><a href="#" className="text-reset">Telefonía IP</a></li>
            <li><a href="#" className="text-reset">Microsoft Teams sobre VoIP Servnet</a></li>
        </ul>
          {/* sociales */}
          <ul className="col-3 list-unstyled">
            <li className="font-weight-bold-uppercase">Redes sociales</li>

            <li><a href="#" className="text-reset"></a></li>
        </ul>
        </div>
    </div>
    </footer>
    // <section id="contact" className="espacios-arriba-abajo">
    // <Container>
    //     <Row>
    //     <Col xl={3}>seccion1</Col>
    //     <Col xl={3}>seccion2</Col>
    //     <Col xl={3}>seccion3</Col>
    //     <Col xl={3}>seccion4</Col>
    //     </Row>
    //     <Row>
    //     <Col xl={12}>seccion5</Col>
    //     </Row>
    //     <Row>
    //     <Col xl={12}>seccion6</Col>
    //     </Row><Row>
    //     <Col xl={12}>seccion7</Col>
    //     </Row>
    // </Container>
    // </section>
  );
};

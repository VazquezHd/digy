import "./contact.css";
import { Col, Row, Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import miImagenFooter from '../../../../assets/logo-bco.png';
// import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col className="colum py-4" xl={6}>
          <a href="/" className="navbar-brand font-weight-bold d-block"> 
      <img src={miImagenFooter} alt="logo-foot" />
        </a>
            <br />
            <br />
            <h3>Ubicaciones</h3>
            {/* menu */}
            <strong>Matriz Tuxpan, Veracruz</strong>
            <br /> Demetrio Ruiz Malerva #65 Local 5E Col. Zapote Gordo Tuxpan,
            Veracruz
            <br /> Telefono: 01-800-838-62-53
            <br />
            Telefonos para Soporte 783-834-00-06, 783-835-97-00 ó 783-834-00-09
            <br />
            <br />
            <strong>Suc. Llano enmedio, Veracruz</strong>
            <br />
            Avenida Independencia No. 75 Primer Piso Colonia Centro Localidad
            Llano Enmedio, Municipio de Ixhuatlán de Madero, Veracruz <br />
            Whatsaap 7461135308 7838359700 ó 7838340009 <br />
            <br />
            <strong>Suc. Actopan Hidalgo</strong>
            <br />
            Calle Hidalgo No. 175 Col. Rojo Gómez Actopan, Hidalgo <br />
            <strong>Suc. Huachinango, Puebla</strong>
            <br />
            Calle Juárez No. 29 Col. Centro Huauchinango, Puebla
          </Col>

          <Col xl={6}>
          <h3>Documentacion</h3>
          <br />
          <ul>
            {/* pendientes como linkear pdf a texto */}
          <div>
      <a href="/public/assets/docs/CARTA DE DERECHO MINIMOS DE LOS USUARIOS.pdf" target="_blank">Haz click aquí</a>
    </div>
            Carta de Derechos Mínimos de los Usuarios de lo Servicios Públicos
            de Telecomunicaciones <br /> Colaboración con Autoridades Mexicanas
            de Seguridad y de Justicia <br />Aviso de privacidad <br />{""}
            Derechos arco <br /> Código de Gestión de Tráfico
            {/* y Administración de Red <br /> Política de diversidad e inclusión{" "}
            <br /> Código de Prácticas Comerciales */}
            <br />
            </ul>
            <h3>Siguenos en</h3>

            <BsFacebook size={30}  href=""/>
          </Col>
        </Row>
        <Row id="copyright">
          <Col xl={12} className="text-center">
            ©2023 Copyright Digy Networks México S.A. de C.V. Términos y condiciones
            Aviso de privacidad
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import "./contact.css";
import { Col, Row, Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import miImagenFooter from '../../../../assets/logo-bco.png';
import avisoPrivacidad from "../../../../assets/docs/AVISO DE PRIVACIDAD DIGY.pdf"
import derechosArco from "../../../../assets/docs/Derechos Arco.pdf"
import trafico from "../../../../assets/docs/POLÍTICAS GESTIÓN DE TRÁFICO Y ADMINISTRACIÓN DE RED.pdf"
import seguridad from "../../../../assets/docs/Colaboracion en Materia de Seguridad y Justicia.pdf"
import derechosMinimos from "../../../../assets/docs/CARTA DE DERECHO MINIMOS DE LOS USUARIOS.pdf"

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col className="colum py-4" xl={4
          } >
          <a href="/" className="navbar-brand font-weight-bold d-block"> 
      <img src={miImagenFooter} alt="logo-foot" />
        </a>
            <br />
            <br />
            <div className=""><p>En Digy Networks el tener a nuestros clientes satisfechos es
lo más importante, es por eso que hacemos lo indispensable
para mantener la mejor estabilidad y atender los reportes de
falla a la brevedad ofreciendo atención vía telefónica,
WhatsApp, correo electrónico, y/o vía aplicación los 365 días
del año, con los siguientes horarios:</p>
<p>
Horarios de servicio <br /> <br />
Call Center: <br />
09:00 am - 08:00 pm <br /><br />
Sucursal Zapote Gordo <br />
09:00 am- 02:00 pm y de 04:00 pm a 07:00 pm. <br /><br />
Correo electrónico y APP móvil <br />
Atención las 24 hrs. del día </p>
</div>
</Col> 
<Col className="colum py-4" xl={4}>
          <div className="row enlaces fs-5">
          <h4>Enláces rápidos</h4>
      <a  className="space" href="/">  Inicio <i class="bi bi-chevron-right"></i></a>
      <a className="space" href="/">  Empresa</a>
      <a className="space" href="/">  Planes</a>
      <a className="space" href="/">  Pruebas de velocidad</a>
      <a className="space" href="/">  Puntos de venta</a>
      <a className="space" href="/">  Pagos</a> <br /><br />
            
            <h4>Legal</h4>
      <a className="space" href={avisoPrivacidad}>Aviso de privacidad</a>
      <a className="space" href={derechosArco}>Derechos arco</a>
      <a className="space" href={trafico}>Código de Gestión de Tráfico</a>
      <a className="space" href={seguridad}>Colaboración con Autoridades Mexicanas de Seguridad y de Justicia</a>
      <a className="space" href={derechosMinimos}>Carta de Derechos Mínimos de los Usuarios de lo Servicios Públicos
            de Telecomunicaciones</a>
    </div>
    </Col>
    <Col className="colum py-4 "  xl={4}>

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
            Calle Juárez No. 29 Col. Centro Huauchinango, Puebla <br /><br />
            <h3>Siguenos en</h3>

            <BsFacebook size={30}  href="https://www.facebook.com/DigyNetworks"/>
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

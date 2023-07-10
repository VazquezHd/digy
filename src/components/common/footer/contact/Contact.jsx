import "./contact.css";
import { Col, Row, Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import miImagenFooter from "../../../../assets/logo-bco.png";
import avisoPrivacidad from "../../../../assets/docs/AVISO DE PRIVACIDAD DIGY.pdf";
import derechosArco from "../../../../assets/docs/Derechos Arco.pdf";
import trafico from "../../../../assets/docs/POLÍTICAS GESTIÓN DE TRÁFICO Y ADMINISTRACIÓN DE RED.pdf";
import seguridad from "../../../../assets/docs/Colaboracion en Materia de Seguridad y Justicia.pdf";
import derechosMinimos from "../../../../assets/docs/CARTA DE DERECHO MINIMOS DE LOS USUARIOS.pdf";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col className="" xl={4}>
            <a href="/" className="navbar-brand font-weight-bold d-block">
              <img src={miImagenFooter} alt="logo-foot" />
            </a>
            <br />
            <br />
            <div className="">
              <span>
                En Digy Networks el tener a nuestros clientes satisfechos es lo
                más importante, es por eso que hacemos lo indispensable para
                mantener la mejor estabilidad y atender los reportes de falla a
                la brevedad ofreciendo atención vía telefónica, WhatsApp, correo
                electrónico, y/o vía aplicación los 365 días del año, con los
                siguientes horarios:
                <br />
                <br />
                Call Center: <br />
                09:00 am - 08:00 pm <br />
                <br />
                Sucursal Zapote Gordo <br />
                09:00 am- 02:00 pm y de 04:00 pm a 07:00 pm. <br />
                <br />
                Correo electrónico y app móvil <br />
                Atención las 24 hrs. del día{" "}
              </span>
            </div>
          </Col>
          <Col className="" xl={4}>
            <h3>Enláces rápidos</h3>
            <a className="" href="/">
              {" "}
              Inicio <i class=""></i>
            </a>
            <a className="" href="/">
              {" "}
              <br /> Empresa
            </a>
            <a className="" href="/">
              {" "}
              <br /> Planes
            </a>
            <a className="" href="/">
              {" "}
              <br /> Pruebas de velocidad
            </a>
            <a className="" href="/">
              {" "}
              <br /> Puntos de venta
            </a>
            <a className="" href="/">
              {" "}
              <br /> Pagos
            </a>{" "}
            <br />
            <br />
            <h3>Legal</h3>
            <a className="" href={avisoPrivacidad}>
              {" "}
              Aviso de privacidad
            </a>
            <a className="" href={derechosArco}>
              {" "}
              <br />
              Derechos arco
            </a>
            <a className="" href={trafico}>
              {" "}
              <br />
              Código de Gestión de Tráfico
            </a>
            <a className="" href={seguridad}>
              {" "}
              <br />
              Colaboración con Autoridades Mexicanas de Seguridad y de Justicia
            </a>
            <a className="" href={derechosMinimos}>
              {" "}
              <br />
              Carta de Derechos Mínimos de los Usuarios de lo Servicios Públicos
              de Telecomunicaciones
            </a>
          </Col>
          <Col className="" xl={4}>
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
            Whatsaap 7461135308 7838359700 ó 7838340009
            <br />
            <br />
            <strong>Suc. Actopan Hidalgo</strong>
            <br />
            Calle Hidalgo No. 175 Col. Rojo Gómez Actopan, Hidalgo <br />
            <br />
            <strong>Suc. Huachinango, Puebla</strong>
            <br />
            Calle Juárez No. 29 Col. Centro Huauchinango, Puebla <br />
            <br />
            <h3>Siguenos en</h3>
            <BsFacebook
              size={30}
              href="https://www.facebook.com/DigyNetworks"
            />
          </Col>
        </Row>
        <Row id="copyright">
          <Col xl={12} className="text-center">
            ©2023 Copyright Digy Networks México S.A. de C.V. Términos y
            condiciones Aviso de privacidad
          </Col>
        </Row>
      </Container>
    </section>
  );
};

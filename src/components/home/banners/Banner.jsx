import "./banners.css";

import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ContactUsButton } from "../../common/buttons/ContactUsButton";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ["Internet", "Telecom", "Cloud"];

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) {
      setDelta(70);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(70);
    }
  };
  return (
    <section id="banner">
      <Container>
        <Row className="text-center">
          <Col xl={12}>
            <h1>Digy Networks</h1>
            <h2>
              {" "}
              El socio en <span className="service">{text}</span> <br />
              que necesitas
            </h2>
            <Container>
              <Row className="justify-content-center">
                <Col lg={7} className="text-center">
                  <p className="p-banner">
                  Te ofrecemos soluciones en conectividad de TI integros
                  para tu empresa, de manera rápida y robusta.
                  </p>
                  <br />
                  <ContactUsButton message={"Contáctanos"}/>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

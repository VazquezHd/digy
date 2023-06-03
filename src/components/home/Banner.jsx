import "./banner.css";

import { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

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
    <section className="banner d-flex align-items-center">
      <Container className="">
        <Row className="text-center  ">
          <Col xl={12}>
            <h1>Dygy</h1>
            <h2>
              {" "}
              El socio en <span className="service">{text}</span> <br />
              que necesitas
            </h2>
            <Container className="">
              <Row className="justify-content-center">
                <Col lg={6} className="text-center">
                  Te ofrecemos conectividad y arquitecturas de TI fiables para
                  tu empresa. Podemos ayudarte a implementar soluciones de
                  manera rápida y robusta.
                  <br/>
                  <Button variant="danger" size="lg" >Agenda una reunion</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

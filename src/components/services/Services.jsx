import { Col, Row, Container } from "react-bootstrap";

export function Service({data}) {
  return (
    <section id={data.id} className="espacios-arriba-abajo ">
      <Container>
        <Row>
          <Col xl={12}>
            {" "}
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </Col>
        </Row>

        <Row>
          <Col xl={6}>
            {" "}
            <p>{data.name}</p>
            <h2>{data.title2}</h2>
          </Col>
          <Col xl={6}>
            {" "}
            <p>{data.text}</p>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

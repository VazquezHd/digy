import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function SolutionCard({ solution }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{solution.name}</Card.Title>
        <Card.Img
        variant="top"
        src={solution.img}
      />
        <Card.Text>{solution.description}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="danger">Me interesa</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

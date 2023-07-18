import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function SolutionCard({ solution }) {
  return (
    <Card className="h-100"> 
      <Card.Img
        variant="top"
        src="https://media.gcflearnfree.org/content/559ae882607fbe195c5d135d_07_06_2015/connectingtotheinternet_image.png"
      />
      <Card.Body>
        <Card.Title>{solution.name}</Card.Title>
        <Card.Text>{solution.description}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="danger">Me interesa</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

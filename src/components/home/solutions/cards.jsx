import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function SolutionCard({solution}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.gcflearnfree.org/content/559ae882607fbe195c5d135d_07_06_2015/connectingtotheinternet_image.png" />
      <Card.Body>
        <Card.Title>{solution.name}</Card.Title>
        <Card.Text>
          {solution.description}
        </Card.Text>
        <Button variant="primary">Me interesa</Button>
      </Card.Body>
    </Card>
  );
}
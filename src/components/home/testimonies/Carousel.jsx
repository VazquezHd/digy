import Carousel from 'react-bootstrap/Carousel';
import testimonies from "./data.json"
import Card from 'react-bootstrap/Card';

function UncontrolledExample() {
  return (
    <Carousel>
        
        {testimonies.map((testimonie, index)=>(
                  <Carousel.Item>
    <Card>
      <Card.Body>

        <Card.Text>
          {testimonie.testimonie}
        </Card.Text>
        <Card.Title>{testimonie.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{testimonie.position}</Card.Subtitle>
      </Card.Body>
    </Card>
                </Carousel.Item>
        ))}

    </Carousel>
  );
}

export default UncontrolledExample;
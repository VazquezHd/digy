import { Link } from "react-scroll";
import { Button } from "react-bootstrap";

export const ContactUsButton = ({ message }) => {
  return (
    <Link to="contact-us" spy={true} smooth={true} duration={500}>
      <Button variant="danger" size="lg">
        {message}
      </Button>
    </Link>
  );
};

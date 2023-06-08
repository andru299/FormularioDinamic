import { Card, Col} from "react-bootstrap";
import "./CardService.css";
export default function CardService({service}) {
    const {title, subtitle, image,footer, link}=service;

    return(
        <Col className="container-card-service">
            <Card>
                <Card.Img src={image} alt={title}/>;
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    <Card.Footer>
                        <a href={link} target="-blank" rel="noreferrer">
                            {footer}
                        </a>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>

    );

    
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import React from 'react';
import '../pages/Food.css';

import burger1 from '../Images/burger1.jpg';
import burger2 from '../Images/burger2.jpg';
import burger3 from '../Images/burger3.jpg';
import burger4 from '../Images/burger4.jpg';
import burger5 from '../Images/burger5.jpg';
import burger6 from '../Images/burger6.jpg';











function Burger() {
  return (
    <div>


    <h1 className="text-center mt-4 mb-4"><b>Burgers</b></h1>
    <Container className="burgerList">
        <Row className="mb-3">
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={burger1} />
                    <Card.Body>
                    <Card.Text>
                        <h3>Rib Burger</h3>
                        <Button variant="dark" type="submit"> Add to Cart </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={burger2} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Big Burger</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={burger3} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Masala Burger</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="mb-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={burger4} />
                    <Card.Body>
                    <Card.Text>
                        <h3>King Burger</h3>
                        <Button variant="dark" type="submit"> Add to Cart </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={burger5} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Vegi Burger</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={burger6} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Hot Burger</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>



    </Container>
    
    </div>
  );
}

export default Burger;
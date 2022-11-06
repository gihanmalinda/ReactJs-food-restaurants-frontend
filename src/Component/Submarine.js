import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import React from 'react';
import '../pages/Food.css';

import submarine1 from '../Images/submarine1.jpg';
import submarine2 from '../Images/submarine2.jpg';
import submarine3 from '../Images/submarine3.jpg';
import submarine4 from '../Images/submarine4.jpg';
import submarine5 from '../Images/submarine5.jpg';
import submarine6 from '../Images/submarine6.jpg';




function Submarine() {
  return (
    <div>


<h1 className="text-center mt-4 mb-4"><b>Submarines</b></h1>
    <Container className="submarineList">
        <Row className="mb-3">
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={submarine1} />
                    <Card.Body>
                    <Card.Text>
                        <h3>Rib Submarine</h3>
                        <Button variant="dark" type="submit"> Add to Cart </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={submarine2} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Big Submarine</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={submarine3} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Moon Submarine</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="mb-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={submarine4} />
                    <Card.Body>
                    <Card.Text>
                        <h3>King Submarine</h3>
                        <Button variant="dark" type="submit"> Add to Cart </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={submarine5} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Vegi Submarine</h3>
                            <Button variant="dark" type="submit"> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={submarine6} />
                    <Card.Body>
                        <Card.Text>
                            <h3>Hot Submarine</h3>
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

export default Submarine;
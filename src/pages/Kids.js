import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import React from 'react';
import './Kids.css';



import kidsCover from '../Images/kidsCover.jpg';
import kideat from '../Images/kideat.jpg';
import happyHour from '../Images/happyHour.jpg';
import kidWallDrawing from '../Images/kidWallDrawing.jpg';
import kidsPlaying from '../Images/kidsPlaying.jpg';
import kidFoodEat from '../Images/kidFoodEat.jpg';



function Kids() {
  return (
    <div>


      {/* kids Cover */}

      <Container fluid>
        <img src={kidsCover} alt="kidsCover" className='img-fluid'/>
      </Container>


      {/* kids Section */}

      <div className='kidsSection'>
        <Container>
          <Row>
            <Col md={6}>
              <img src={kideat} alt="kid eat" className='img-fluid rounded' />
            </Col>

            <Col md={6}>
              <div className="center">
                <h5>About</h5>
                <h1>Potato Kids</h1>
                <p>Even in this high-tech age, the low-tech plant continues to be the key to nutrition and health. Investing in early childhood nutrition is a surefire strategy. The returns are incredibly high. Came from a plant, eat it; was made in a plant, don’t. Health is a relationship between you and your body. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* cloud Section */}

      <Container fluid className="g-0">
        <img src={happyHour} alt="happy Hour" className='img' width="100%"/>
      </Container>





      {/* kids programs */}

      <div className='kidsPrograms'>
        <Container className="pb-5">
        <h5>About</h5>
        <h1>Happy Hour Programs</h1>
        <p>Even in this high-tech age, the low-tech plant continues to be the key to nutrition and health. Investing in early childhood nutrition is a surefire strategy. The returns are incredibly high. Came from a plant, eat it; was made in a plant, don’t. Health is a relationship between you and your body. </p>

        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={kidWallDrawing} />
              <Card.Body>
                <Card.Title>Drawing Competitions</Card.Title>
                <Card.Text>
                  This contest by Khula Aasmaan is aimed at encouraging child art, child artists, student artists, young artists, youth art, art students.
                </Card.Text>
                <Button variant="primary">Find More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
          <Card>
              <Card.Img variant="top" src={kidsPlaying} />
              <Card.Body>
                <Card.Title>Kids Activities</Card.Title>
                <Card.Text>
                  Play Would You Rather. Play I Spy. Play Simon Says. Play Board Games. Play Hide and Seek. Have an indoor scavenger hunt. Play Bingo.
                </Card.Text>
                <Button variant="primary">Find More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
          <Card>
              <Card.Img variant="top" src={kidFoodEat} />
              <Card.Body>
                <Card.Title>Eat and Win</Card.Title>
                <Card.Text>
                  Eat to Win for Permanent Fat Loss: The Revolutionary Fat-Burning Diet for Peak Mental and Physical Performance.
                </Card.Text>
                <Button variant="primary">Find More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>

















    </div>
  );
}

export default Kids;
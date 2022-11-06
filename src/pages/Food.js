import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';



import React from 'react';
import './Food.css';
import Burger from "../Component/Burger"
import Submarine from "../Component/Submarine"


function Food() {
  return (
    <div>
    
    <Container className="mt-5 mb-5"></Container>

      {/* foodlist content */}

      <div className="foodlist">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Burgers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Submarines</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Burger/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Submarine/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      </div>


















    
    </div>
  );
}

export default Food;
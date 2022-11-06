import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


import React from 'react';
import './Home.css';

import carousel1 from '../Images/carousel1.jpg';
import carousel2 from '../Images/carousel2.jpg';
import carousel3 from '../Images/carousel3.jpg';
import HeroImage from '../Images/HeroImage.jpg';

import ordersPhone from '../Images/ordersPhone.jpg';

import historyBurger from '../Images/historyBurger.webp';

import servicesCallCenter from '../Images/servicesCallCenter.jpg';
import servicesDeliveryMan from '../Images/servicesDeliveryMan.png';
import servicesOrderOnline from '../Images/servicesOrderOnline.jpg';
import servicesSaftyFood from '../Images/servicesSaftyFood.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
  <div>


      {/* Carousel */}

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* order form content */}
      <div className="orderForm">
        <Container fluid className="g-0">
          <Row className="g-0">
            <Col md={6}>
              <div className="center">
                <h1>Start Ordering</h1>

                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                      <Link to="./">Forget Password</Link>
                    </Form.Text>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>

                  <Button variant="dark" type="submit">
                    Sign in
                  </Button>
                  {" "}
                  <Button variant="secondary" type="submit">
                    Create account
                  </Button>

                </Form>

              <br/>
              <h6><b>Continue without an account</b></h6>
              <p>Express checkout with online payment as guest</p>
              <Button variant="danger">Guest Order</Button>

              </div>
            </Col>
            <Col md={6}><img src={ordersPhone} alt="orders Phone" className='img-fluid'/></Col>
          </Row>
        </Container>
      </div>



      {/* hero content */}

      <div className="heroContent">
        <Container fluid className="g-0">
          <Row className="g-0">
            <Col md={6}><img src={HeroImage} alt="ChilliImage" className='img-fluid'/></Col>
            <Col md={6}>
              <div className="center">
                <h1>Special Spicy Taste</h1>
                <br/>
                <p>Savor the taste of a steaming hot burger to celebrate hamburger day! Visit us and celebrate with our delicious range of burgers. Order Karachi Burger Spicy Taste delivery in Karachi now! Superfast food delivery to your home or office Check Karachi Burger Spicy Taste menu</p>
                <br/>
                <Button variant="dark">Find More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>



      {/* detail content */}

      <div className="detailContent">
        <Container className="g-0">
          <Row className="g-0">
            <Col md={6}>
              <div className="center">
                <h1>Flavour</h1>
                <p>flavour of something an idea of what something is like. I have tried to convey something of the flavour of the argument. The following extract gives a flavour of the poet's later works. She rotated around the departments to get a flavour of all aspects of the business.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="center">
                <h1>Nutrition</h1>
                <p>A Nutrition Facts label lists the nutritional content, the serving size, and the calories for a recommended serving of a food product. This helps consumers make the best decision on how much to eat, maybe when they want to eat this food, or how they can better balance their food choices throughout the day.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
















      {/* history content */}

      <div className="history">
        <Container fluid className="g-0">
          <Row className="g-0">
            <Col md={6}>
              <div className="center">
                <p>100% of the chicken used from local poultry producers.</p>
                <h3>Hand-Baked, Flavorful, and Trustworthy Taste! </h3>
                <p>In 2015, the first restaurant in Gampaha introduced potatoes to Sri Lanka. Since then, this highly regarded and quickly expanding retail restaurant company has grown to include more than 40 locations across the nation, serving close to 11.5 million meals each year.
                <br/>
         
                </p>
              </div>
            </Col>
            <Col md={6}><img src={historyBurger} alt="Burger" className='img-fluid'/></Col>
          </Row>
        </Container>
      </div>





        {/* services content */}

      <div className="services">
        <Container>
          <h1>Our Process</h1>
          <p>We provide an international dining experience for the enjoyment of our guests.</p>
          <Row>
            <Col md={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={servicesOrderOnline} />
                <Card.Body>
                  <Card.Text>
                    Call us or order online & don't forget to choose contactless delivery.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={servicesCallCenter} />
                <Card.Body>
                  <Card.Text>
                    We handle your order as soon as possible. We will do it very interestingly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={servicesDeliveryMan} />
                <Card.Body>
                  <Card.Text>
                    Our delivery riders will get your order to you quickly, safely and super Hot.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={servicesSaftyFood} />
                <Card.Body>
                  <Card.Text>
                    Now eat those foods deliciously with you and your loved ones. It is our pleasure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>










  </div>
  );
}

export default Home;
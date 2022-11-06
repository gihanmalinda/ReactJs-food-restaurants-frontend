import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import React from 'react';
import './Tech.css';

import tech1 from '../Images/tech1.jpg';
import tech2 from '../Images/tech2.jpg';
import tech3 from '../Images/tech3.jpg';
import tech4 from '../Images/tech4.jpg';
import tech5 from '../Images/tech5.jpg';


function Tech() {
  return (
    <div>


    <div className="techNews">
      <Container>
        <h1 className="text-center mt-4 mb-4"><b>MODERN TECHNIQUES WE USE</b></h1>
        <p>New food technology trends have transformed the food and beverage manufacturing industry and associated businesses from within, leading to beneficial changes and improvements across the board. These trends aren't all technological in the traditional sense, however. Everything from packaging techniques and materials to the equipment within facilities is part of the innovation that we can expect to see in the food and beverage industry over the next year. Here are some exciting things to look out for.</p>

        <Row className="mt-5 mb-5">
          <Col md={5}><img src={tech1} alt="Plastic-free Packaging" className='img-fluid rounded'/></Col>
          <Col md={7}>
            <div className="centre">
              <h1>Plastic-free and Smart Packaging</h1>
              <p>For decades, many food manufacturers have used plastic in some form or another in their packaging, since it has always been the cheapest and most convenient solution. With recent advancements in the fight against climate change, however, consumer perspectives are shifting, and they’re looking to manufacturers to make some green changes.</p>
              <Button variant="outline-dark">Read More</Button>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5 mb-5">
          <Col md={5}><img src={tech2} alt="Drinks" className='img-fluid rounded'/></Col>
          <Col md={7}>
            <div className="centre">
              <h1>Drinks That Offer More</h1>
              <p>As nutritional research advances, people are paying more and more attention to what’s in their beverages of choice—avoiding sugary, highly processed drinks that do more harm than good. This has led to the continuing popularity of functional beverages like kombucha and similar health drinks that boast various benefits.</p>
              <Button variant="outline-dark">Read More</Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md={5}><img src={tech3} alt="Shopping Technology" className='img-fluid rounded'/></Col>
          <Col md={7}>
            <div className="centre">
              <h1>Advanced Shopping Technology</h1>
              <p>Continued advancements in computerized food processing technology have cemented automation and autonomous equipment as integral to the food production and processing industry. As demand continues to soar along with costs, automation is helping to decrease production time while increasing output.</p>
              <Button variant="outline-dark">Read More</Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md={5}><img src={tech4} alt="Drainage System" className='img-fluid rounded'/></Col>
          <Col md={7}>
            <div className="centre">
              <h1>A Modern Drainage System</h1>
              <p>New types of drainage systems offer improved safety and sanitation throughout food and beverage processing facilities. As an example, the Slot Drain puts a modern twist on the traditional trench drain system with its grateless design that is built pre-sloped to prevent standing water and bacterial growth.</p>
              <Button variant="outline-dark">Read More</Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md={5}><img src={tech5} alt="people Trust" className='img-fluid rounded'/></Col>
          <Col md={7}>
            <div className="centre">
              <h1>A Focus on Transparency and Trust</h1>
              <p>Large-scale recalls over the last 30 years have led to a decline in trust between consumers and the food industry. Another trend you can expect to see over the next year is members of the upper echelon of the food industry working to regain customers' trust, realigning their values, and being more transparent overall.</p>
              <Button variant="outline-dark">Read More</Button>
            </div>
          </Col>
        </Row>

      </Container>
    </div>


















    </div>
  );
}

export default Tech;
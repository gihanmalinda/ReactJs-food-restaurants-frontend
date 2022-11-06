import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import './Restaurant.css';

import restaurantCarousel1 from '../Images/restaurantCarousel1.jpg';
import restaurantCarousel2 from '../Images/restaurantCarousel2.jpg';
import restaurantCarousel3 from '../Images/restaurantCarousel3.jpg';
import restaurantCarousel4 from '../Images/restaurantCarousel4.jpg';
import white from '../Images/white.jpg';
import user1 from '../Images/user1.jpg';
import user2 from '../Images/user2.jpg';
import user3 from '../Images/user3.jpg';
import newRestaurant from '../Images/newRestaurant.jpg';

import React from 'react';





function Restaurant() {
  return (
  <div>

      {/* Restaurant Carousel */}

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restaurantCarousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restaurantCarousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restaurantCarousel3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restaurantCarousel4}
            alt="Forth slide"
          />
        </Carousel.Item>
      </Carousel>








      {/* Restaurant testimonials */}
      <div className="testimonialsContent">
        <Container>
          <Row>
            <Col>
              <div className="centre">
                <h1>HERE'S WHAT OUR CUSTOMERS SAYS:</h1>
              </div>
            </Col>

            <Col>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={white}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <img className='roundedCircle' src={user1} alt="First slide" width="123" height="123"/><br/><br/>
                    <h5>Sharyl Tamsin</h5>
                    <p><i>"It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations. Excellent food. Menu is extensive and seasonal to a particularly high standard."</i></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={white}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <img className='roundedCircle' src={user2} alt="First slide" width="123" height="123"/><br/><br/>
                    <h5>Elyzabeth Zoey</h5>
                    <p><i>"This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twist"</i></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={white}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <img className='roundedCircle' src={user3} alt="First slide" width="123" height="123"/><br/>
                    <h5>Cyrilla Channing</h5>
                    <p><i>"Do yourself a favor and visit this lovely restaurant in CN. The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing – everything we tasted melted in other mouths. Absolutely the best meal we had while in CN. Highly recommend!"</i></p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>




      {/* New opening */}

      <div className="newOpening mb-5">
        <Container>
            <Row>
              <Col md={6}>
                <img className='img-fluid rounded' src={newRestaurant} alt="new Opening Restaurant"/>
              </Col>
              <Col md={6}>
                <div className="centre">
                  <h1>New restaurant planning to open up soon...</h1>
                  <p>Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.Food is for eating, and good food is to be enjoyed… I think food is, actually, very beautiful in itself.Every time you use the word ‘healthy,’ you lose. The key is to make yummy, delicious food that happens to be healthy.</p>
                  <Button variant="outline-dark">Read More</Button>
                </div>
              </Col>
            </Row>
        </Container>
      </div>



  </div>
  );
}

export default Restaurant;







  
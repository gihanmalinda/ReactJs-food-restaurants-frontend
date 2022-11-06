import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import Logo from '../Images/logo.png';
import fb from '../Images/fb.png';
import insta from '../Images/insta.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';


function Footer() {
  return (
    <div>


      <div className="footerContent">
        <Container>
          <Row className="pt-5 pb-5">
            <Col md={3}>
              <div>
                <img src={Logo} alt="Logo" className='img-fluid'/>
              </div>
            </Col>
            <Col md={3}>
              <h5>Colombo</h5>
              <address>
                Level 4, 46/38,<br/>
                Navam Mawatha,<br/>
                Colombo 02, 00200
              </address><br/>

              <h5>Gampaha</h5>
              <address>
                78, 46/38,<br/>
                SK Mawatha,<br/>
                Gampaha, 0540
              </address>
            </Col>

            <Col md={3}>
              <h5>Contact</h5>
              <p>Interested about us?<br/>
              <a href = "mailto:hello@potato.com?subject = Feedback&body = Message">hello@potato.com</a></p>

              <h5>Get in touch</h5>
              <p>Work and general inquiries <b>+94717591515</b></p>

              <h5>Assistance hours:</h5>
                <p>Every day<br/>
                9.00 am to 11.00 pm</p>
            </Col>

            <Col md={3}>
              <h5>Stay in touch</h5>
              <div className="d-flex align-item-centre">
                <div><Link><img className="me-2" src={fb} alt="fb icon" width="35px" height="35px" /></Link></div>
                <div><Link><img className="me-2" src={insta} alt="insta icon" width="35px" height="35px" /></Link></div>
                <div><Link><img className="me-2" src={linkedin} alt="linkedin icon" width="35px" height="35px" /></Link></div>
                <div><Link><img className="me-2" src={twitter} alt="twitter icon" width="35px" height="35px" /></Link></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>








    </div>
  );
}

export default Footer;
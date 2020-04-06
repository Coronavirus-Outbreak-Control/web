import React from 'react'
import { FormattedMessage } from 'react-intl'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutSection = () => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='about-container'>
        <Row className='justify-content-md-center'>
            <Col >
                <h1><span className='dont-span'><FormattedMessage id='About.title' /></span></h1>
                <br/>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='About.p1' />
                </p>
                <br/>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='About.p2' />
                </p>
            </Col>
        </Row>
    </div>
)

export default AboutSection
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HelpSection = () => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='help-container'>
  <Row className='justify-content-md-center'>
      <Col>
          <h1><span className='dont-span'>
            <FormattedMessage id='Help.title' />
          </span></h1>
          <br/>
          <p style={{fontSize: '18px'}}>
            <FormattedMessage id='Help.p1' />
          </p>
          <br/>
          <p style={{fontSize: '18px'}}>
            <FormattedMessage id='Help.p2' />
          </p>
          <br/>
          <p style={{fontSize: '18px'}}>
            <FormattedMessage id='Help.p3' />
          </p>
          <br/>
          <p style={{fontSize: '18px'}}>
          <FormattedMessage id='Help.p4' />
          </p>
          <br/>
          <p style={{fontSize: '18px'}}>
          <FormattedMessage id='Help.p5' />
          </p>
      </Col>
  </Row>
</div>
)

export default HelpSection
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProtectSection = () => (
  <div className='container-fluid col-sm-12 white-bkg' id='protect-container'>
    <Row className='row justify-content-md-center'>
        <Col>
            <h1 style={{textAlign: 'center'}}>
            <FormattedMessage id='Protect.title' />
            </h1>
            <br/>
            <p style={{fontSize: '18px'}}>
            <FormattedMessage id='Protect.p1' />
            </p>
            <br/>
            <p style={{fontSize: '18px'}}>
            <FormattedMessage id='Protect.p2' />
            </p>
        </Col>
    </Row>
  </div>
)

export default ProtectSection
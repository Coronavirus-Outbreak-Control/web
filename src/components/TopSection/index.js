import React from 'react'
import { FormattedMessage } from 'react-intl'
import mobileTop from '../../assets/images/screens/mobile-top.png'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TopSection = () => (
  <Container fluid className='col-sm-12 blue-bkg' id='top-container'>
        <Row className="justify-content-md-center">
            <Col >
                <h1><FormattedMessage id='Top.title' /></h1>
            </Col>
        </Row>
        <Row className="justify-content-md-center row-conformity">
            <Col className='mt-4'>
                <h2><FormattedMessage id='Top.subtitle' /></h2>
                <p></p>
                <p><FormattedMessage id='Top.row1' /></p>
                <p><FormattedMessage id='Top.row2' /></p>
            </Col>
            <Col md="auto" className="align-bottom">
                <div className='mobile-image-top'>
                    <img src={mobileTop} />
                </div>
            </Col>

        </Row>
    </Container>
)

export default TopSection
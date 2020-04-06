import React from 'react'
import anonymous from '../../assets/images/screens/anonymous.png'
import {FormattedMessage} from "react-intl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const AnonymousSection = () => (
  <div className='container-fluid col-sm-12 pt-5 pb-5 ' id='anonymous-container'>
        <Row className='justify-content-md-center'>
            <Col >
                <h1><FormattedMessage id='Anonymous.title' /></h1>
                <br/>
                <p style={{fontSize: '18px'}}><FormattedMessage id='Anonymous.text' /></p>
                <br/>
            </Col>
        </Row>
        <Row >
            <Col>
                <h5><FormattedMessage id='Anonymous.subtitle' /></h5>
                <br/>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text1' /></p>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text2' /></p>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text3' /></p>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text4' /></p>
            </Col>
            <Col className="image-container">
                <img src={anonymous}/>
            </Col>
        </Row>
        <Row className='justify-content-md-center'>
            <Col>
                <br/>
                <p style={{fontSize: '18px'}}><FormattedMessage id='Anonymous.text5' />
                <a href='https://github.com/Coronavirus-Outbreak-Control' target='_blank'>
                  Coronavirus Outbreak Control
                </a></p>
            </Col>
        </Row>
    </div>
)

export default AnonymousSection
import React from 'react'
import how_it_works_1 from '../../assets/images/screens/how_it_works_1.png'
import how_it_works_2 from '../../assets/images/screens/how_it_works_2.png'
import how_it_works_3 from '../../assets/images/screens/how_it_works_3.png'
import how_it_works_3b from '../../assets/images/screens/how_it_works_3_b.png'
import how_it_works_4 from '../../assets/images/screens/how_it_works_4.png'
import {FormattedMessage} from "react-intl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HowSection = () => (
  <div
    className='container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg'
    id='how-container'
  >
    <Row >
      <Col>
        <h1><FormattedMessage id='How.title' /></h1>
      </Col>
    </Row>
    <Row className=' pt-1 pb-1' xs={1} md={2} lg={2}>
      <Col className="image-container">
        <img src={how_it_works_1} height='100' />
      </Col>
      <Col>
        <p>
          <FormattedMessage id='How.text1' />
        </p>
      </Col>
    </Row>
    <Row className='pt-1 pb-1' xs={1} md={2} lg={2}>

      <Col>
        <img src={how_it_works_2} height='100' />
      </Col>
      <Col>
        <p>
          <FormattedMessage id='How.text2' />{' '}
        </p>{' '}
      </Col>
    </Row>
    <Row className=' pt-1 pb-1' xs={1} md={2} lg={2}>
      <Col>
        <img src={how_it_works_3} height='100' />
        <img src={how_it_works_3b} height='100' />
      </Col>
      <Col>
        <p>
          <FormattedMessage id='How.text3' />
        </p>
      </Col>
      {/*<Col>*/}
      {/*  */}
      {/*</Col>*/}
    </Row>
    <Row className='pt-1 pb-1'  xs={1} md={2} lg={2}>
      <Col>
        <img src={how_it_works_4} height='100' />
      </Col>
      <Col>
        <p>
          <FormattedMessage id='How.text4' />
        </p>
      </Col>
    </Row>
  </div>
);

export default HowSection;

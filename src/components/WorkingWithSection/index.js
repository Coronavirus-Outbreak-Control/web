import React from 'react'
import { FormattedMessage } from 'react-intl'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkingWithSection = () => (
  <div className='container-fluid white-bkg' id='working-with-container'>
        <Row >
            <Col>
                <h1 style={{textAlign: 'center'}}>
                <FormattedMessage id='WorkingWith.title' />
                </h1>
                <br/>
                <p style={{fontSize: '18px', textAlign:"center"}}>
                  <FormattedMessage id='WorkingWith.description' />
                </p>
            </Col>
        </Row>
        <Row className="justify-content-md-center pt-4">
            <Col sm={8}>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='WorkingWith.collaborateWith' />
                </p>

                <ul>
                    <li><p>
                    <FormattedMessage id='WorkingWith.list1' />
                    </p></li>
                    <li><p>
                    <FormattedMessage id='WorkingWith.list2' />
                    </p></li>
                    <li><p>
                    <FormattedMessage id='WorkingWith.list3' />
                    </p></li>
                </ul>
                <br/>
                <p style={{fontSize: '18px'}}>
                <FormattedMessage id='WorkingWith.supported' />
                </p>
                <ul>
                    <li><p><FormattedMessage id='WorkingWith.list8' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list4' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list5' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list9' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list6' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list7' /></p></li>
                </ul>
                <br/>
                <p style={{fontSize: '18px'}}><FormattedMessage id='WorkingWith.footer' /></p>
            </Col>
        </Row>
    </div>
)

export default WorkingWithSection
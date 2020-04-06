import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactSection = (props) => (
  <div className='container-fluid col-sm-12 white-bkg ' id='contact-container'>
  <Row className='row justify-content-md-center' xs={1} md={1} lg={3}>
      <Col>
          <h3>
            <FormattedMessage id='Contact.title' />
          </h3>
          <br/>
          <p><a href='mailto:coronavirus.outbreak.control@gmail.com'>coronavirus.outbreak.control@gmail.com</a></p>
      </Col>
      <Col>
          <h3>
          <FormattedMessage id='Contact.title2' />
          </h3>
          <br/>
          <p style={{textDecoration: 'underline'}}><a target='_blank' rel='noopener noreferrer' href='http://coronavirus-outbreak-control.github.io/web/download/Coronavirus_Outbreak_Control_-_Full Proposal.pdf'>
            <FormattedMessage id='Contact.proposal' />
          </a></p>
      </Col>
      <Col>
          <h3><FormattedMessage id='Contact.title3' /></h3>
          <br/>
          <p style={{textDecoration: 'underline'}}><a target='_blank' rel='noopener noreferrer' href="http://coronavirus-outbreak-control.github.io/web/download/Terms_and_Conditions.pdf">Terms & Conditions</a>, <a target='_blank' rel='noopener noreferrer' href={props.intl.locale === 'it' ?  'http://coronavirus-outbreak-control.github.io/web/download/Privacy_Policy_ita.pdf' : 'http://coronavirus-outbreak-control.github.io/web/download/Privacy_Policy_en.pdf'}>Privacy Policy</a></p>
      </Col>
  </Row>
</div>
)


export default injectIntl(ContactSection)
import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

const ContactSection = (props) => (
  <div className='container-fluid col-sm-12 ' id='contact-container'>
  <div className='row justify-content-md-center'>
        <div class="col-sm-1"></div>
        <div class="col-sm-3">
          <h3><span className='dont-span'>
            <FormattedMessage id='Contact.title' />
          </span></h3>
          <br/>
          <p><a href='mailto:coronavirus.outbreak.control@gmail.com'>coronavirus.outbreak.control@gmail.com</a></p>
      </div>
      <div className='col-sm-4'>
          <h3><span className='dont-span'>
          <FormattedMessage id='Contact.title2' />
          </span></h3>
          <br/>
          <p style={{textDecoration: 'underline'}}><a target='_blank' rel='noopener noreferrer' href='http://coronavirus-outbreak-control.github.io/web/download/Coronavirus_Outbreak_Control_-_Full Proposal.pdf'>
            <FormattedMessage id='Contact.proposal' />
          </a></p>
      </div>
      <div class="col-sm-4">
          <h3><span class="dont-span"><FormattedMessage id='Contact.title3' /></span></h3>
          <br/>
          <p style={{textDecoration: 'underline'}}><a target='_blank' rel='noopener noreferrer' href="http://coronavirus-outbreak-control.github.io/web/download/Terms_and_Conditions.pdf">Terms & Conditions</a>, <a target='_blank' rel='noopener noreferrer' href={props.intl.locale === 'it' ?  'http://coronavirus-outbreak-control.github.io/web/download/Privacy_Policy_ita.pdf' : 'http://coronavirus-outbreak-control.github.io/web/download/Privacy_Policy_en.pdf'}>Privacy Policy</a></p>
      </div>
  </div>
</div>
)


export default injectIntl(ContactSection)
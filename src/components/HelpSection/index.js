import React from 'react'
import { FormattedMessage } from 'react-intl'

const HelpSection = () => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='help-container'>
  <div className='row justify-content-md-center'>
      <div className='col-2'></div>
      <div className='col-8'>
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
      </div>
      <div className='col-2'></div>
  </div>
</div>
)

export default HelpSection
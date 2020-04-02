import React from 'react'
import { FormattedMessage } from 'react-intl'

const ProtectSection = () => (
  <div className='container-fluid col-sm-12' id='protect-container'>
  <div className='row justify-content-md-center'>
      <div className='col-2'></div>
      <div className='col-8'>
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
      </div>
      <div className='col-2'></div>
  </div>
</div>
)

export default ProtectSection
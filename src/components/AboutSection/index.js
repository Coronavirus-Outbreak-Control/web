import React from 'react'
import { FormattedMessage } from 'react-intl'

const AboutSection = () => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='about-container'>
        <div className='row justify-content-md-center'>
            <div className='col-2' />
            <div className='col-8'>
                <h1><span className='dont-span'><FormattedMessage id='About.title' /></span></h1>
                <br/>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='About.p1' />
                </p>
                <br/>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='About.p2' />
                </p>
            </div>
            <div className='col-2'></div>
        </div>
    </div>
)

export default AboutSection
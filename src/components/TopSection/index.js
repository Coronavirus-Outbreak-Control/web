import React from 'react'
import { FormattedMessage } from 'react-intl'
import mobileTop from '../../assets/images/screens/mobile-top.png'

const TopSection = () => (
  <div className='container-fluid col-sm-12 blue-bkg' id='top-container'>
        <div className='row'>
            <div className='col-8 mt-5'>
                <h1><FormattedMessage id='Top.title' /></h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-8 mt-5'>
                <h2><FormattedMessage id='Top.subtitle' /></h2>
                <p></p>
                <p><FormattedMessage id='Top.row1' /></p>
                <p><FormattedMessage id='Top.row2' /></p>
            </div>
            <div className='col-4 mt-2'>
                <div className='mobile-image-top'>
                    <img src={mobileTop} />
                </div>
            </div>

        </div>
    </div>
)

export default TopSection
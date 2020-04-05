import React from 'react'
import anonymous from '../../assets/images/screens/anonymous.png'
import {FormattedMessage} from "react-intl";


const AnonymousSection = () => (
  <div className='container-fluid col-sm-12 pt-5 pb-5 ' id='anonymous-container'>
        <div className='row justify-content-md-center'>
            <div className='col-2'></div>
            <div className='col-8'>
                <h1><FormattedMessage id='Anonymous.title' /></h1>
                <br/>
                <p style={{fontSize: '18px'}}><FormattedMessage id='Anonymous.text' /></p>
                <br/>
            </div>
            <div className='col-2'></div>
        </div>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-3'>
                <h5><FormattedMessage id='Anonymous.subtitle' /></h5>
                <br/>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text1' /></p>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text2' /></p>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text3' /></p>
                <p><span className='dont-span'><FormattedMessage id='Anonymous.not' /></span><FormattedMessage id='Anonymous.text4' /></p>
            </div>
            <div className='col-7'>
                <img src={anonymous} height='310' style={{marginLeft: '80px', marginTop: '-18px'}}/>
            </div>
        </div>
        <div className='row justify-content-md-center'>
            <div className='col-2'/>
            <div className='col-8'>
                <br/>
                <p style={{fontSize: '18px'}}><FormattedMessage id='Anonymous.text5' />
                <a href='https://github.com/Coronavirus-Outbreak-Control' target='_blank'>
                  Coronavirus Outbreak Control
                </a></p>
            </div>
            <div className='col-2'/>
        </div>
    </div>
)

export default AnonymousSection
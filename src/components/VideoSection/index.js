import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import videoRight from '../../assets/images/screens/video-right.png'
import videoLeft from '../../assets/images/screens/video-left.png'

const VideoSection = (props) => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='video-container'>
    <div className='row justify-content-center'>
        <div className='col-2'>
            <img src={videoLeft} height='375' width='164'/>
        </div>
        <div className='col-8' style={{zIndex:3}}>
            <div className='iframe-container'>
              { props.intl.locale === 'it' ? (
                <iframe width='640' height='375' src='https://www.youtube.com/embed/k2OcIFyb9GE'
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen/>
              ) :(<iframe width="640" height="375" src="https://www.youtube.com/embed/l78iazHl_W8"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>)}

            </div>

        </div>
        <div className='col-2'>
            <img src={videoRight} height='375' width='164'/>
        </div>
    </div>
  </div>
)

export default injectIntl(VideoSection)
import React from 'react'
import { injectIntl } from 'react-intl'
import videoRight from '../../assets/images/screens/video-right.png'
import videoLeft from '../../assets/images/screens/video-left.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bocconi from '../../assets/images/screens/bocconi.png';
import cnr from '../../assets/images/screens/cnr.png';
import copernicani from '../../assets/images/screens/copernicani.png';
import pi_campus from '../../assets/images/screens/pi_campus.png';
import sapienza from '../../assets/images/screens/sapienza.png';
import translated from '../../assets/images/screens/translated.png';
import ufsc from '../../assets/images/screens/ufsc.png';
import be from '../../assets/images/screens/be.png';
import tesla from '../../assets/images/screens/tesla.png';

import Slider from "react-slick";

const settings = {
  speed: 500,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  centerMode: true,
  slidesToScroll: 1,
  className: 'js-slider pb-5',
  // centerPadding: '150px'

};
const VideoSection = (props) => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='video-container'>
    <div >
      <Slider {...settings} >
        <div><img className='js-item' src={bocconi} width="100px" height="100px"/></div>
        <div><img className='js-item' src={cnr} width="100px" height="100px"/></div>
        <div><img className='js-item' src={copernicani} width="100px" height="100px"/></div>
        <div><img className='js-item' src={pi_campus} width="100px" height="100px"/></div>
        <div><img className='js-item' src={sapienza} width="100px" height="100px"/></div>
        <div><img className='js-item' src={translated} width="100px" height="100px"/></div>
        <div><img className='js-item' src={ufsc} width="100px" height="100px"/></div>
        <div><img className='js-item' src={be} width="100px" height="100px"/></div>
        <div><img className='js-item' src={tesla} width="100px" height="100px"/></div>
      </Slider>
    </div>
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
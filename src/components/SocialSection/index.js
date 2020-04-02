import React from 'react'
import {FormattedMessage} from "react-intl";

const SocialSection = () => (
  <div className='container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg' id='social-container'>
  <div className='row'>
      <div className="col-1"></div>
      <div className="col-10">
          <h1><FormattedMessage id='Social.title' /></h1>
          <div className="share-inside-container">
              <h4><FormattedMessage id='Social.subtitle1' /></h4>
              <p><FormattedMessage id='Social.text1' /></p>

              <h4><FormattedMessage id='Social.subtitle2' /></h4>
              <p><FormattedMessage id='Social.text2' /></p>

              <h4><FormattedMessage id='Social.subtitle3' /></h4>
              <p><FormattedMessage id='Social.text3' /></p>

              <h4><FormattedMessage id='Social.subtitle4' /></h4>
              <p><FormattedMessage id='Social.text4' /></p>
          </div>
          <div className='fb-share-button'
               data-href='https://coronavirus-outbreak-control.github.io/web/index.html'
               data-layout='button'
               data-size='large' style={{float: 'left', marginRight: '5px'}}>
          </div>
          <div style={{float: 'left'}}>
              <a href='https://twitter.com/share?ref_src=twsrc%5Etfw' data-size='large' className='twitter-share-button' data-text='Together we can save lives:' data-url='https://coronavirus-outbreak-control.github.io/web/index.html' data-show-count='false'>Tweet</a>
          </div>
      </div>
      <div className='col-1'></div>
  </div>
</div>
)

export default SocialSection
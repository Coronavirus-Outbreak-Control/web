import React from "react"
import { FormattedMessage } from "react-intl"
import interazioni from '../../assets/images/screens/interazioni.png'
import open_source from '../../assets/images/screens/open_source.png'
import virologi from '../../assets/images/screens/virologi.png'
import asintomatici from '../../assets/images/screens/asintomatici.png'


const SocialSection = () => (
  <div
    class="container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg"
    id="social-container"
  >
    <div class="row justify-content-md-center">
      <div class="col-1" />
      <div class="col-2">
        <img src={interazioni} height="100" />
        <p className='pt-5'>
          <FormattedMessage id="Social.text1" />
        </p>
      </div>
      <div class="col-2">
        <img src={open_source} height="100" />
        <p className='pt-5'>
          <FormattedMessage id="Social.text2" />
        </p>
      </div>
      <div class="col-2">
        <img src={virologi} height="100" />
        <p className='pt-5'>
          <FormattedMessage id="Social.text3" />
        </p>
      </div>
      <div class="col-2">
        <img src={asintomatici} height="100" />
        <p className='pt-5'>
          <FormattedMessage id="Social.text4" />
        </p>
      </div>
      <div class="col-1" />
    </div>

    <br />
    <h1>
      <FormattedMessage id="Social.title" />
    </h1>
    <div
      class="fb-share-button"
      data-href="https://coronavirus-outbreak-control.github.io/web"
      data-layout="button"
      data-size="large"
      style={{
        float: 'left',
        marginRight: '15px'
      }}
    />
    <div style={{ float: "left" }}>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        data-size="large"
        class="twitter-share-button"
        data-text="Together we can save lives:"
        data-url="https://coronavirus-outbreak-control.github.io/web/index.html"
        data-show-count="false"
      >
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      />
    </div>
  </div>
)

export default SocialSection

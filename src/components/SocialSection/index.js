import React from "react"
import { FormattedMessage } from "react-intl"
import interazioni from '../../assets/images/screens/interazioni.png'
import open_source from '../../assets/images/screens/open_source.png'
import virologi from '../../assets/images/screens/virologi.png'
import asintomatici from '../../assets/images/screens/asintomatici.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SocialSection = () => (
  <div
    className="container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg"
    id="social-container"
  >
    <Row xs={2} md={2} lg={4} className="justify-content-md-center">
      <Col className="align-items-end">
        <Row>
          <div className="social-image-container">
            <img src={interazioni} />
          </div>

        </Row>
        <Row>
          <p className='pt-5'>
            <FormattedMessage id="Social.text1" />
          </p>
        </Row>
      </Col>
      <Col>
        <Row>
          <div className="social-image-container">
          <img src={open_source} />
          </div>
        </Row>
        <Row>
          <p className='pt-5'>
            <FormattedMessage id="Social.text2" />
          </p>
        </Row>
      </Col>
      <Col>
        <Row>
          <div className="social-image-container">
          <img src={virologi} />
          </div>
        </Row>
        <Row>
          <p className='pt-5'>
            <FormattedMessage id="Social.text3" />
          </p>
        </Row>
      </Col>
      <Col>
        <Row>
          <div className="social-image-container">
          <img src={asintomatici} />
          </div>
        </Row>
        <Row>
          <p className='pt-5'>
            <FormattedMessage id="Social.text4" />
          </p>
        </Row>
      </Col>
    </Row>

    <br />
    <h1>
      <FormattedMessage id="Social.title" />
    </h1>
    <div className="share-buttons">
      <div className="share-buttons-inside">
        <div
          className="fb-share-button"
          data-href="https://coronavirus-outbreak-control.github.io/web"
          data-layout="button"
          data-size="large"
          style={{
            float: 'left',
            marginRight: '15px'
          }}
        />
        <div>
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            data-size="large"
            className="twitter-share-button"
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
    </div>
  </div>
)

export default SocialSection

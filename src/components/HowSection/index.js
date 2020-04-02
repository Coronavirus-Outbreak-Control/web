import React from 'react'
import how_it_works_1 from '../../assets/images/screens/how_it_works_1.png'
import how_it_works_2 from '../../assets/images/screens/how_it_works_2.png'
import how_it_works_3 from '../../assets/images/screens/how_it_works_3.png'
import how_it_works_3b from '../../assets/images/screens/how_it_works_3_b.png'
import how_it_works_4 from '../../assets/images/screens/how_it_works_4.png'
import {FormattedMessage} from "react-intl";

const HowSection = () => (
  <div
    className='container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg'
    id='how-container'
  >
    <div className='row'>
      <div className='col-2' />
      <div className='col-8'>
        <h1><FormattedMessage id='How.title' /></h1>
      </div>
      <div className='col-2' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-2' />
      <div className='col-2'>
        <img src={how_it_works_1} height='100' />
      </div>
      <div className='col-5 '>
        <p>
          <FormattedMessage id='How.text1' />
        </p>
      </div>
      <div className='col-3' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-3' />

      <div className='col-5 '>
        <p>
          <FormattedMessage id='How.text2' />{' '}
        </p>{' '}
      </div>
      <div className='col-2'>
        <img src={how_it_works_2} height='100' />
      </div>
      <div className='col-2' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-2' />
      <div className='col-2'>
        <img src={how_it_works_3} height='100' />
      </div>
      <div className='col-4 '>
        <p>
          <FormattedMessage id='How.text3' />
        </p>
      </div>
      <div className='col-2'>
        <img src={how_it_works_3b} height='100' />
      </div>
      <div className='col-2' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-2' />
      <div className='col-2'>
        <img src={how_it_works_4} height='100' />
      </div>
      <div className='col-5 '>
        <p>
          <FormattedMessage id='How.text4' />
        </p>
      </div>
      <div className='col-3' />
    </div>
  </div>
);

export default HowSection;

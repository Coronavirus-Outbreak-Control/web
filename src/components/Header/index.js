import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import logo from '../../assets/images/screens/transparent_icon-ios-1024@1x 2.png'
import itFlag from '../../assets/images/screens/italy-flag-icon-16.png'
import ukFlag from '../../assets/images/screens/united-kingdom-flag-small.png'

const Header = (props) => (
    <header>
      <ul className='nav justify-content-end blue-bkg header-menu-container'>
        <a className='navbar-brand'>
          <img
            src={logo}
            height='100'
            width='100'
          />
        </a>
        <li className='nav-item'>
          <a className='nav-link' href='#apps-container'>
            <FormattedMessage id='Heading.download' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#anonymous-container'>
            <FormattedMessage id='Heading.anonymous' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#how-container'>
            <FormattedMessage id='Heading.how' />
          </a>
        </li>
  
        <li className='nav-item'>
          <a className='nav-link' href='#about-container'>
            <FormattedMessage id='Heading.about' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#contact-container'>
            <FormattedMessage id='Heading.contact' />
          </a>
        </li>
        {/* TEMP FIX */}
        <li className='nav-item'>
          <a
            className='nav-link'
            onClick={()=> props.onChangeLanguage(props.intl.locale === 'en' ? 'it' : 'en')}>
            {
              props.intl.locale === 'it'
              ? <span>
              English
            <img
              src={ukFlag}
              height='12'
              style={{marginLeft: '5px', marginTop: '-1px'}}
            />
              </span>
              : <span>
              Italian
            <img
              src={itFlag}
              height='12'
              style={{marginLeft: '5px', marginTop: '-1px'}}
            />
              </span>
            }
          </a>
        </li>
      </ul>
      <nav className='navbar-light col-sm-12' />
    </header>
  )

export default injectIntl(Header)

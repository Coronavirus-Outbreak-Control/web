import React from 'react'
import { FormattedMessage } from 'react-intl'
import logo from '../../assets/images/screens/transparent_icon-ios-1024@1x 2.png'
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
          <FormattedMessage
            id='Heading.download'
            defaultMessage='Scarica' />
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#anonymous-container'>
          Anonimo e Open Source
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#how-container'>
          Come funziona
        </a>
      </li>

      <li className='nav-item'>
        <a className='nav-link' href='#about-container'>
          Chi siamo
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#contact-container'>
          Contattaci
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' onClick={()=>props.onChangeLanguage('en')}>
          English
          <img
            src={ukFlag}
            height='12'
            style={{marginLeft: '5px', marginTop: '-1px'}}
          />
        </a>
      </li>
    </ul>
    <nav className='navbar-light col-sm-12' />
  </header>
);

export default Header

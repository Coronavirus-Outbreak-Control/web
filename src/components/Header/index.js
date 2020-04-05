import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import logo from '../../assets/images/screens/transparent_icon-ios-1024@1x 2.png'
import itFlag from '../../assets/images/screens/italy-flag-icon-16.png'
import ukFlag from '../../assets/images/screens/united-kingdom-flag-small.png'
import frFlag from '../../assets/images/screens/france-flag-small.png'

// tempo
const localesProps = [
  {
    id: 'it',
    flag: itFlag,
    label: 'Italiano'
  },
  {
    id: 'en',
    flag: ukFlag,
    label: 'English'
  },
  {
    id: 'fr',
    flag: frFlag,
    label: 'Français'
  }
]

const Header = (props) => {
  const currentLocale = localesProps.find(locale =>  locale.id === props.intl.locale)
  return (
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
        <li className='dropdown nav-item lang dropdown-menu-right'>
        <a className="nav-link dropdown-toggle language" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        {currentLocale.label}<img src={currentLocale.flag} width='22' />
        </a>
        <div className="dropdown-menu dropdown-menu-right language" aria-labelledby="navbarDropdown">
          {localesProps.map(locale => (
            <a className='nav-item nav-link language' onClick={()=> props.onChangeLanguage(locale.id)}>
            <span>{locale.label}</span> 
            <img
              src={locale.flag}
              height='12'
            />
          </a>
          ))}
        </div>
        </li>
      </ul>
      <nav className='navbar-light col-sm-12' />
    </header>
  )
}

export default injectIntl(Header)

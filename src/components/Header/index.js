import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import logo from '../../assets/images/screens/transparent_icon-ios-1024@1x 2.png'
import itFlag from '../../assets/images/screens/italy-flag-icon-16.png'
import ukFlag from '../../assets/images/screens/united-kingdom-flag-small.png'
import frFlag from '../../assets/images/screens/france-flag-small.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

class Header extends React.Component {
  render = () => {
    const currentLocale = localesProps.find(locale =>  locale.id === this.props.intl.locale)
    return (
      <header className="blue-bkg header-menu-container" >
        <Navbar  collapseOnSelect expand="lg"  >
          <Navbar.Brand >
            <img
              src={logo}
              height='100'
              width='100'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>

            <Nav>

              <Nav.Link className='nav-item px-3' href='#apps-container'>
                  <FormattedMessage id='Heading.download' />
              </Nav.Link>
              <Nav.Link className='nav-item px-3' href='#anonymous-container'>
                  <FormattedMessage id='Heading.anonymous' />
              </Nav.Link>
              <Nav.Link className='nav-item px-3' href='#how-container'>
                  <FormattedMessage id='Heading.how' />
              </Nav.Link>
              <Nav.Link className='nav-item px-3' href='#about-container'>
                  <FormattedMessage id='Heading.about' />
              </Nav.Link>
              <Nav.Link className='nav-item px-3' href='#contact-container'>
                  <FormattedMessage id='Heading.contact' />
              </Nav.Link>
              {/* TEMP FIX */}
              <NavDropdown title={currentLocale.label} className='dropdown nav-item lang dropdown-menu-left px-3'>
                  {localesProps.map(locale => (
                    <NavDropdown.Item className='language' onClick={()=> this.props.onChangeLanguage(locale.id)}>
                      <span>{locale.label}</span>
                      <img
                        src={locale.flag}
                        height='12'
                      />
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/*<nav className='navbar-light col-sm-12' />*/}
      </header>
    )
  }
}

export default injectIntl(Header)

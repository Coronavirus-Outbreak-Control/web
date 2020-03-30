import React from 'react'
import logo from '../../assets/images/screens/transparent_icon-ios-1024@1x 2.png'
import ukFlag from '../../assets/images/screens/united-kingdom-flag-small.png'

const Header = () => (
  <header>
    <ul className='nav justify-content-end blue-bkg header-menu-container'>
      <a class='navbar-brand'>
        <img
          src={logo}
          height='100'
          width='100'
        />
      </a>
      <li class='nav-item'>
        <a class='nav-link' href='#apps-container'>
          Scarica
        </a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='#anonymous-container'>
          Anonimo e Open Source
        </a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='#how-container'>
          Come funziona
        </a>
      </li>

      <li class='nav-item'>
        <a class='nav-link' href='#about-container'>
          Chi siamo
        </a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='#contact-container'>
          Contattaci
        </a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='index_en.html'>
          English
          <img
            src={ukFlag}
            height='12'
            style={{marginLeft: '2px', marginTop: '-1px'}}
          />
        </a>
      </li>
    </ul>
    <nav class='navbar-light col-sm-12' />
  </header>
);

export default Header

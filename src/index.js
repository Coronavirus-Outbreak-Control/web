import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import localeData from './locale/data.json'
import App from './App'
// TODO: fix css order
import './global/styles/normalize.css'
import './global/styles/typography.css'
import './global/styles/general.css'
import './global/styles/bootstrap.min.css'
import * as serviceWorker from './serviceWorker'

const DEFAULT_LANGUAGE = 'it'

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/de'); // Add locale data for de
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/de'); // Add locale data for de
}

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]

const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData[DEFAULT_LANGUAGE]

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

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

ReactDOM.render(
    <App/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

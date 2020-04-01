import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
// TODO: fix css order
import './global/styles/normalize.css'
import './global/styles/typography.css'
import './global/styles/general.css'
import './global/styles/bootstrap.min.css'
import * as serviceWorker from './serviceWorker'

render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

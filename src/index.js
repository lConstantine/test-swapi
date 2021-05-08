import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store/store'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename='/test-swapi'>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

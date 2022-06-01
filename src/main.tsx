// LIBs
import React from 'react'
import ReactDOM from 'react-dom'

// STYLE
import './core/stylesheet/_default.css';

// ROUTER
import { Router } from './core/router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

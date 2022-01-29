import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './App'
import Home from './components/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

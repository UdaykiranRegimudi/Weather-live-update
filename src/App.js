import React, {useState} from 'react'
import {WetherApp} from './components/WetherApp'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <input type="text" onChange={this.onData} />
    </div>
  )
}

export default App

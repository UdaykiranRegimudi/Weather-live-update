import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    search: '',
    name: '',
    ram: true,
  }

  getDetails = async () => {
    const {search} = this.state
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c3e89bc97eb6bd54a4b2b7ea34b98c35`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok === false) {
      localStorage.removeItem('ram')
      this.setState({ram: true, name: '', search: ''})
    } else {
      localStorage.setItem('temp', data.main.temp)
      localStorage.setItem('minTemp', data.main.temp_min)
      localStorage.setItem('maxTemp', data.main.temp_max)
      localStorage.setItem('weather', data.weather[0].main)
      localStorage.setItem('ram', false)
      localStorage.setItem('humidity', data.main.humidity)
      localStorage.setItem('pressure', data.main.pressure)
      localStorage.setItem('name', data.name)
      this.setState({name: data.name})
    }
  }

  searchCity = event => {
    this.setState({search: event.target.value})
  }

  press = event => {
    if (event.key === 'Enter') {
      this.getDetails()
    }
  }

  render() {
    const temp = localStorage.getItem('temp')
    const minTemp = localStorage.getItem('minTemp')
    const maxTemp = localStorage.getItem('maxTemp')
    const weather = localStorage.getItem('weather')
    const pressure = localStorage.getItem('pressure')
    const name = localStorage.getItem('name')
    const search = localStorage.getItem('search')
    const humidity = localStorage.getItem('humidity')
    const ram = localStorage.getItem('ram')
    console.log(temp)
    return (
      <div className="background">
        <div className="background1">
          <input
            type="text"
            className="input"
            onChange={this.searchCity}
            onKeyPress={this.press}
            placeholder="Enter the city name"
          />

          {ram === null ? (
            <h1>The City Not Found</h1>
          ) : (
            <>
              <div className="uday">
                <h1>{name}</h1>
              </div>
              <h1>{temp} F</h1>
              <h2>{weather}</h2>
              <p>Coldest Temperature: {minTemp} F </p>
              <p>Warmest Temperature: {maxTemp} F </p>
              <div className="uday">
                <p>Humidity :{humidity} </p>
                <p>Pressure :{pressure} </p>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default App

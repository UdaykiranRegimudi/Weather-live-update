import {Component} from 'react'

import './App.css'

const usha = true

class App extends Component {
  state = {
    search: '',
    uday: [],
  }

  componentDidMount() {
    localStorage.setItem('search1', '')
  }

  getDetails = async () => {
    const search1 = localStorage.getItem('search1')
    console.log(search1)
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search1}&appid=c3e89bc97eb6bd54a4b2b7ea34b98c35`
    const response = await fetch(url)
    const data = await response.json()
    console.log(response.ok)

    if (response.ok === false) {
      localStorage.setItem('object', true)
    }
    const ram = {
      temp: data.main.temp,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      weather: data.weather[0].main,
      ram: false,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      name: data.name,
    }
    localStorage.setItem('object', JSON.stringify(ram))
    this.setState({uday: ram})
  }

  searchCity = event => {
    this.setState({search: event.target.value})
  }

  press = event => {
    if (event.key === 'Enter') {
      const {search} = this.state
      localStorage.removeItem('object')
      localStorage.setItem('search1', search)
      this.getDetails()
    }
  }

  render() {
    const weatherData = localStorage.getItem('object')
    const {
      temp,
      minTemp,
      maxTemp,
      weather,
      ram,
      humidity,
      pressure,
      name,
    } = JSON.parse(weatherData)

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
          <div className="uday">
            <h1>{name}</h1>
          </div>
          {ram ? (
            <h1>The Country Not Found</h1>
          ) : (
            <>
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

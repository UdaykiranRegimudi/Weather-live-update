import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    search: 'Hyderabad',
    name: 'Hyderabad',
    temp: '',
    minTemp: '',
    maxTemp: '',
    humidity: '',
    pressure: '',
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {search} = this.state
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c3e89bc97eb6bd54a4b2b7ea34b98c35`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (data.message === 'city not found') {
      this.setState({ram: true})
    }
    this.setState({
      temp: data.main.temp,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      weather: data.weather[0].main,
      ram: false,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      name: data.name,
    })
  }

  searchCity = event => {
    this.setState({search: event.target.value})
  }

  press = event => {
    if (event.key === 'Enter') {
      this.componentDidMount()
    }
  }

  render() {
    const {
      search,
      temp,
      minTemp,
      maxTemp,
      weather,
      ram,
      humidity,
      pressure,
      name,
    } = this.state
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

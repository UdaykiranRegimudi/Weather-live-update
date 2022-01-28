import axios from 'axios'
import './index.css'

const WetherApp = async query => {
  const url = 'https://openweathermap.org/data/2.5/weather'
  const API_KEY = 'c3e89bc97eb6bd54a4b2b7ea34b98c35'
  const {data} = await axios.get(url, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })
  return data
}

export default WetherApp

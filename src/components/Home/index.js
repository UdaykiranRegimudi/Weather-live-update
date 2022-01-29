import './index.css'

const Home = props => {
  const GotoApp = () => {
    const {history} = props
    history.replace('/weather')
  }
  return (
    <div className="backgroundHome">
      <div className="cardHome">
        <h3>
          Every body wants happiness, Nobody wants pain but you can`t have a
          rainbow with out a little rain
        </h3>
        <h4 className="head">
          Check the weather of the city which did you want...
        </h4>
        <button className="button" type="button" onClick={GotoApp}>
          Check Weather
        </button>
      </div>
    </div>
  )
}

export default Home

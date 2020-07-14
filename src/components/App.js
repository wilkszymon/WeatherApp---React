import React, { Component } from 'react';
import '../styles/App.css';
import WeatherBody from './WeatherBody.js'

class App extends Component {
  state = {
    value: '',
    tempMax: '',
    country: '',
    tempMin: '',
    city: '',
    temp: [],

  }

  dateBul = (number) => {
    const date = new Date();
    date.setDate(date.getDate() + number);
    let dateString = date.toString();
    return dateString.slice(0, 3);
  }

  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  searchWeather = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.state.value}&key=dca0035042bc4348ba1804106f131e75&hours`)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error(response.status);
        })
        .then(response => response.json())
        .then(data => {
          const temp = data.data;
          this.setState({
            value: '',
            city: data.city_name,
            temp,
          })
        })
        .catch(error => console.log(error))
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  };

  render() {
    const minTEMP = this.state.temp.map(el => parseInt(el.low_temp));
    const maxTEMP = this.state.temp.map(el => parseInt(el.max_temp));
    const icon = this.state.temp.map(el => el.weather.code);
    const description = this.state.temp.map(el => el.weather.description);

    let content = (
      <div className="weatherCont">
        <WeatherBody day={this.dateBul(0)} icon={icon[0]} minTemp={minTEMP[0]} maxTemp={maxTEMP[0]} description={description} />
        <WeatherBody day={this.dateBul(1)} icon={icon[1]} minTemp={minTEMP[1]} maxTemp={maxTEMP[1]} description={description} />
        <WeatherBody day={this.dateBul(2)} icon={icon[2]} minTemp={minTEMP[2]} maxTemp={maxTEMP[2]} description={description} />
        <WeatherBody day={this.dateBul(3)} icon={icon[3]} minTemp={minTEMP[3]} maxTemp={maxTEMP[3]} description={description} />
        <WeatherBody day={this.dateBul(4)} icon={icon[4]} minTemp={minTEMP[4]} maxTemp={maxTEMP[4]} description={description} />
      </div>
    )

    return (
      <>
        <div className="app">
          <input type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.searchWeather}
            placeholder="Search City..."
            className='search-bar'
          />
          <h5 className='cityName'>{this.state.city}</h5>
          {this.state.city.length === 0 ? null : content}
        </div>
      </>
    )
  };
}

export default App;
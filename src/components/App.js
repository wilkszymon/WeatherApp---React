import React, { Component } from 'react';

import WeatherBody from './WeatherBody'
import InputToSearch from './InputToSearch'

import '../styles/App.css';


class App extends Component {
  state = {
    value: '',
    city: '',
    temp: [],
    data: [],
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

  clickBtnToSearch = (row) => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${row}&key=dca0035042bc4348ba1804106f131e75&hours`)
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
  }

  render() {
    const { value, city, temp } = this.state;
    const minTEMP = temp.map(el => parseInt(el.low_temp));
    const maxTEMP = temp.map(el => parseInt(el.max_temp));
    const icon = temp.map(el => el.weather.code);
    const description = temp.map(el => el.weather.description);

    let content = (
      <>
        <h5 className='cityName'>{city}</h5>
        <div className="weatherCont">
          <WeatherBody day={this.dateBul(0)} icon={icon[0]} minTemp={minTEMP[0]} maxTemp={maxTEMP[0]} description={description} />
          <WeatherBody day={this.dateBul(1)} icon={icon[1]} minTemp={minTEMP[1]} maxTemp={maxTEMP[1]} description={description} />
          <WeatherBody day={this.dateBul(2)} icon={icon[2]} minTemp={minTEMP[2]} maxTemp={maxTEMP[2]} description={description} />
          <WeatherBody day={this.dateBul(3)} icon={icon[3]} minTemp={minTEMP[3]} maxTemp={maxTEMP[3]} description={description} />
          <WeatherBody day={this.dateBul(4)} icon={icon[4]} minTemp={minTEMP[4]} maxTemp={maxTEMP[4]} description={description} />
        </div>
      </>
    )

    return (
      <div className="app">
        <InputToSearch
          value={value}
          keyPress={this.searchWeather}
          change={this.handleChange}
          click={this.clickBtnToSearch}
        />
        {city.length === 0 ? null : content}
      </div>
    )
  };
}

export default App;
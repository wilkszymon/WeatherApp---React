import React, { Component } from 'react';

import Icon from './Icon';

import '../styles/WeatherBody.css';

class WeatherBody extends Component {
    state = {
        active: false,
    }

    render() {
        const { icon, minTemp, maxTemp, day } = this.props
        return (
            <div className="WeatherBody card">
                <Icon icon={icon} />
                <div className="day">{day}</div>
                <div className="temp">
                    <span className="maxTemp">{maxTemp}&#176;</span>
                    <span className="minTemp">{minTemp}&#176;</span>
                </div>
            </div >
        );
    }
}

export default WeatherBody;



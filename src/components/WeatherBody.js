import React, { Component } from 'react';
import '../styles/WeatherBody.css';
import Icon from './Icon';



class WeatherBody extends Component {
    state = {
        active: false,
    }


    render() {
        return (
            <div className="WeatherBody card">
                <Icon icon={this.props.icon} />
                <div className="day"
                    style={{
                        color: '#b8b8b8',
                        margin: '15px 0',
                    }}
                >{this.props.day}</div>
                <div className="temp">
                    <span className="minTemp">{this.props.minTemp}&#176;</span>
                    <span className="maxTemp">{this.props.maxTemp}&#176;</span>
                </div>

            </div >
        );
    }
}

export default WeatherBody;



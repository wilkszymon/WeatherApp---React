import React from 'react';
import Cloudy from '../images/cloudy.svg'
import Rain from '../images/rain.svg'
import Snow from '../images/snowing.svg'
import Thunderstorm from '../images/Thunderstorm.png'
import Thermometer from '../images/thermometer.svg'
import CloudyLot from '../images/OvercastClo.png'
import HeavySnow from '../images/HeavySnow.png'
import Sun from '../images/SunClear.png'
import '../styles/Icon.css'


const Icon = (props) => {

    switch (props.icon) {
        case 800:
            return <img className="icon" src={Sun} alt="Cloudy" />

        case 801:
            return <img className="icon" src={Sun} alt="Cloudy" />

        case 802:
            return <img className="icon" src={Cloudy} alt="Cloudy" />

        case 803:
            return <img className="icon" src={Cloudy} alt="Cloudy" />

        case 804:
            return <img className="icon" src={CloudyLot} alt="Cloudy" />

        case 200:
            return <img className="icon" src={Thunderstorm} alt="Cloudy" />

        case 201:
            return <img className="icon" src={Thunderstorm} alt="Cloudy" />

        case 202:
            return <img className="icon" src={Thunderstorm} alt="Cloudy" />

        case 230:
            return <img className="icon" src={Thunderstorm} alt="Cloudy" />

        case 600:
            return <img className="icon" src={Snow} alt="Cloudy" />

        case 601:
            return <img className="icon" src={HeavySnow} alt="Cloudy" />

        case 602:
            return <img className="icon" src={HeavySnow} alt="Cloudy" />

        case 610:
            return <img className="icon" src={Snow} alt="Cloudy" />

        case 500:
            return <img className="icon" src={Rain} alt="Cloudy" />

        case 502:
            return <img className="icon" src={Rain} alt="Cloudy" />

        default:
            return (
                <>
                    <img className="icon" src={Thermometer} alt="Thermometer" />
                    <h5>{props.description}</h5>
                </>
            )
    }
}


export default Icon;
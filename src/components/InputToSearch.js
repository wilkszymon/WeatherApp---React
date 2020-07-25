import React, { Component } from 'react';
import Cities from './Cities';

import '../styles/InputToSearch.css'


class InputToSearch extends Component {
    state = {
        data: [],
    }
    componentDidMount = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then(json => {
                const data = json.map(el => el.capital);
                this.setState({
                    data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        const { keyPress, change, value, click } = this.props;
        const { data } = this.state;

        function search(rows) {
            return rows.filter(row => row.toLowerCase().indexOf(value.toLowerCase()) > -1)
        }

        return (
            <div className="list">
                <div className="list__form">
                    <div className="list__input">
                        <input type="text"
                            value={value}
                            onChange={change}
                            onKeyPress={keyPress}
                            placeholder="Search City..."
                            className='search-bar'
                        />
                    </div>
                    <Cities data={search(data)} click={click} />
                </div>
            </div>
        );
    }
}

export default InputToSearch;

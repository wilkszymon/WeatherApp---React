import React from 'react';

import '../styles/InputToSearch.css'

const InputToSearch = (props) => {
    return (
        <input type="text"
            value={props.value}
            onChange={props.change}
            onKeyPress={props.keyPress}
            placeholder="Search City..."
            className='search-bar'
        />
    );
}

export default InputToSearch;
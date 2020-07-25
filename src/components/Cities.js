import React from 'react';

import '../styles/Cities.css'

export default function Cities({ data, click }) {
    return (
        <ul className="list__ul">
            {data.length >= 250
                ?
                null
                :
                data.map((row, i) => {
                    return (
                        <li className="list__li" key={i} onClick={() => click(row)}>{row}</li>
                    )
                })
            }
        </ul>
    )
}
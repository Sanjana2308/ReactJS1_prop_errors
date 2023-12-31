import React from 'react'
import './slide.css'

import {
    bodyStyle,
    listUnStyled,
    headingFinalStyle
} from './slides.style'

const ml = (
    <div className="slide">
        <h1 style={headingFinalStyle}> Styling in React</h1>
        <hr/>
        <ul style={ {...bodyStyle,...listUnStyled} }>
            <li>You can style using CSS classes</li>
            <li>You can style using inline styling </li>
        </ul>   
    </div>
);

export default ml;
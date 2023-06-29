 import React, {Fragment} from "react";

 import {
        paragraphStyle,
        headingStyle,
        headingText,
        bodyText,
        textCenter, 
        listUnStyled   
 } from './slide-style';

import './slide.css'

const Slide = () => {
    const slide = (
        <div className="slide">
        <h1 style={{...headingText,...textCenter}}>Styling in React</h1>
        <hr/>
        <div style={bodyText}>
            <ul style={{...listUnStyled, marginTop : '1em'}}>
                <li>You can provide style using CSS classes</li>
                <li>You can provide inline style using a JS object</li>
                <p style={{...paragraphStyle, ...headingStyle}}>You can provide inline style using Other object</p>
            </ul>
        </div>
    </div>
    );
    return slide;
};

const ell = (
    <Fragment>
        <Slide/>
        <Slide/>
    </Fragment>
);


export default ell;
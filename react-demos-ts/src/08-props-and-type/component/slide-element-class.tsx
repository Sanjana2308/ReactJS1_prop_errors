import React, {Fragment, Component} from "react";

import {
    headingText,
    bodyText,
    textCenter, 
    listUnStyled,   
    headingStyle,
    paragraphStyle
} from './slide-style';

import './slide.css'

class Slide extends React.Component {
    render(){
    const slide = (
        <div className="slide">
        <h1 style={{...headingText,...textCenter,...headingStyle}}>Styling in React</h1>
        <hr/>
        <div style={bodyText}>
            <ul style={{...listUnStyled, marginTop : '1em'}}>
                <li>You can provide style using CSS classes</li>
                <li>You can provide inline style using a JS object</li>
                <p style={{...headingStyle, ...paragraphStyle}}>You can provide inline style using one more way</p>
            </ul>
        </div>
    </div>
    );
    return slide;
    };
};

const ell = (
    <Fragment>
        <Slide/>
        <Slide/>
    </Fragment>
);


export default ell;
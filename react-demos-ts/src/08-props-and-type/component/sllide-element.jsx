 import React, {ReactNode} from "react";
 import './slide.css'
 import PropTypes from 'prop-types';
 


function Slide( { heading, childern, page } /*: Props */  ){
    const slide = (
        <div className="slide">
        <span className="slide-number">{page?.current} / {page?.total}</span>
        <h1 className="heading-text text-center">{heading}</h1>
        <hr/>
        <div className="body-text">
            {children}
        </div>
    </div>
    );
    return slide;
};

Slide.propTypes = {
    heading : PropTypes.string.isRequired,
    page: PropTypes.shape({
        current : PropTypes.number.isRequired, 
        total: PropTypes.number.isRequired
    }),
    childern : PropTypes.node.isRequired 
};
export default Slide;
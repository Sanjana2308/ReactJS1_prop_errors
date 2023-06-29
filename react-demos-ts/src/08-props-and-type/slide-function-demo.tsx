import React from "react";
import Slide from "./component/sllide-element";
import './slide-demo.css';

const el = (
    <>
        <Slide heading="How do you style?" page={ {current : 1,total : 2}}>
             <ul className="list-unstyled" style={{marginTop : '1.5em'}}>
                <li>You can provide style using CSS classes</li>
                <li>You can provide inline style using a JS object</li>
            </ul>
        </Slide>

        <Slide heading="What are props and react?" page={ {current : 2,total : 2}}>
             <p>
                Props are  values used to customiesd the React components instance.
                childern are a special prop.
             </p>
        </Slide>
    </>
);

export default el;
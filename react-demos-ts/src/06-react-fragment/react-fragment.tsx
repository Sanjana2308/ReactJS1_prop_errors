import React, {Fragment} from 'react';

const fruitsEl = (
    <Fragment>
        <li>Apples</li>
        <li>Oranges</li>
    </Fragment>
);

const veggiEl = (
    <Fragment>
        <li>Potatoes</li>
        <li>Onions</li>
    </Fragment>
);

const shopingList = (
    <ul>
        {fruitsEl}
        {veggiEl}
    </ul>
);

export default shopingList;
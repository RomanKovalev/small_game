import React from 'react';

import './square.styles.scss';

const Square = (props) => (
    <div className="square" style={ {backgroundColor: props.status} } datatag={props.datatag}>
    </div>
)

export default Square;
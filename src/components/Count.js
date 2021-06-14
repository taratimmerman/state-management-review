import React from 'react';
import PropTypes from 'prop-types';

const Count = props => {
    return (
        <h1>
            {props.count}
        </h1>
    );
};

Count.propTypes = {
    count: PropTypes.number
};

export default Count;

import React from 'react';
import PropTypes from 'prop-types';
import Count from '../components/Count';
import Action from '../components/Action';

const Controls = props => {
    return (
        <>
            <Count count={props.count}/>
            <div className="App-actions">
                <Action onClick={props.decreaseCount} label="-" />
                <Action onClick={props.increaseCount} label="+" />
            </div>
        </>
    );
};

Controls.propTypes = {
    decreaseCount: PropTypes.func,
    increaseCount: PropTypes.func,
    count: PropTypes.number
};

export default Controls;

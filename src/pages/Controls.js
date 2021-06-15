import React from 'react';
import Count from '../components/Count';
import Action from '../components/Action';
import { useCount } from '../App';

const Controls = () => {
    const [state, dispatch] = useCount();

    return (
        <>
            <Count count={state}/>
            <div className="App-actions">
                <Action onClick={() => dispatch({ type: 'DECREMENT' })} label="-" />
                <Action onClick={() => dispatch({ type: 'INCREMENT' })} label="+" />
            </div>
        </>
    );
};

export default Controls;

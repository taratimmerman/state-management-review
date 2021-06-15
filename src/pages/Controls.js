import React from 'react';
import Count from '../components/Count';
import Action from '../components/Action';
import { useDispatch } from 'react-redux';
import { counterSlice } from '../App';

const Controls = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Count />
            <div className="App-actions">
                <Action onClick={() => dispatch(counterSlice.actions.decrement())} label="-" />
                <Action onClick={() => dispatch(counterSlice.actions.increment())} label="+" />
            </div>
        </>
    );
};

export default Controls;

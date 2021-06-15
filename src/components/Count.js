import React from 'react';
import { useCount } from '../App';

const Count = () => {
    const [state] = useCount();

    return (
        <h1>
            {state}
        </h1>
    );
};

export default Count;

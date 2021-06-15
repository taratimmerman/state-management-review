import React from 'react';
import Count from '../components/Count';
import { useCount } from '../App';

const Home = () => {
    const [state] = useCount();
    
    return (
        <>
            <Count count={state}/>
            <h4>Hello! Welcome to Counter.</h4>
            <p>Navigate to the controls page to change the count.</p>
        </>
    );
};

export default Home;


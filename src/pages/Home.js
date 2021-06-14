import React from 'react';
import Count from '../components/Count';
import PropTypes from 'prop-types';

const Home = props => {
    return (
        <>
            <Count count={props.count}/>
            <h4>Hello! Welcome to Counter.</h4>
            <p>Navigate to the controls page to change the count.</p>
        </>
    );
};

Home.propTypes = {
    count: PropTypes.number
};

export default Home;


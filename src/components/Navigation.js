import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navigation = () => {
    return (
        <nav>
            <Button color="primary" component={Link} to={"/"}>Home</Button>
            <Button color="primary" component={Link} to={"/controls"}>Controls</Button>
        </nav>
    );
};

export default Navigation;

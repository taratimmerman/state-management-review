/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';

const Action = ({ label, onClick }) => {
    return (
        <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        >
          {label}
        </Button>
    );
};

export default Action;

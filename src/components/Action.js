import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Action = props => {
  return (
    <Button
    variant="contained"
    color="primary"
    onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

Action.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Action;

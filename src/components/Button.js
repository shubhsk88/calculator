import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ name }) => {
  return <button>{name}</button>;
};

Button.protoTypes = {
  name: PropTypes.string,
};
export default Button;

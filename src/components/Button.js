import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ name }) => (
  <button type="button" className="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};
export default Button;

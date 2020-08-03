import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ name, color, wide }) => {
  const backgroundColor = color;
  const width = wide ? '50%' : '25%';
  return (
    <button type="button" style={{ backgroundColor, width }} className="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};
export default Button;

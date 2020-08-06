import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const backgroundColor = color;
  const handleClick = buttonName => {
    clickHandler(buttonName.target.innerText);
  };
  const width = wide ? '50%' : '25%';

  return (
    <button
      onClick={handleClick}
      type="button"
      style={{ backgroundColor, width }}
      className="button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
  clickHandler: null,
};
export default Button;

import React from 'react';
import PropTypes from 'prop-types';
const Display = ({ result = '0' }) => {
  return <div>{result}</div>;
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;

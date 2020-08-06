import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);
  const group1 = ['AC', '+/-', '%', '/'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  return (
    <div className="button-panel">
      <div className="group">
        {group1.map((name, i) => (
          <Button
            key={name}
            color={i === group1.length - 1 ? 'orange' : '#E0E0E0'}
            name={name}
            clickHandler={handleClick}
          />
        ))}
      </div>
      <div className="group">
        {group2.map((name, i) => (
          <Button
            key={name}
            color={i === group1.length - 1 ? 'orange' : '#E0E0E0'}
            name={name}
            clickHandler={handleClick}
          />
        ))}
      </div>
      <div className="group">
        {group3.map((name, i) => (
          <Button
            key={name}
            color={i === group1.length - 1 ? 'orange' : '#E0E0E0'}
            name={name}
            clickHandler={handleClick}
          />
        ))}
      </div>
      <div className="group">
        {group4.map((name, i) => (
          <Button
            key={name}
            color={i === group1.length - 1 ? 'orange' : '#E0E0E0'}
            name={name}
            clickHandler={handleClick}
          />
        ))}
      </div>
      <div className="group">
        {group5.map((name, i) => (
          <Button
            key={name}
            color={i === group1.length - 1 ? 'orange' : '#E0E0E0'}
            wide={name === '0'}
            name={name}
            clickHandler={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

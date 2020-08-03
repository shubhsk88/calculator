import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const first = Big(numberOne);
  const second = Big(numberTwo);
  switch (operation) {
    case '-':
      result = first - second;
      break;
    case '+':
      result = first + second;
      break;

    case '*':
      result = first * second;
      break;
    case '/':
      if (second === 0) result = undefined;
      else result = first / second;
      break;
    case '%':
      result = (first / second) * 100;
      break;
    default:
      result = 0;
      break;
  }
  return result;
};

export default operate;

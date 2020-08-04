import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const first = Big(Number(numberOne));
  const second = Big(Number(numberTwo));
  switch (operation) {
    case '-':
      result = first.minus(second);
      break;
    case '+':
      result = first.add(second);
      break;

    case '*':
      result = first.mul(second);
      break;
    case '/':
      if (numberTwo === '0') return 'undefined';
      result = first.div(second);
      break;

    default:
      result = 0;
      break;
  }
  return result;
};

export default operate;

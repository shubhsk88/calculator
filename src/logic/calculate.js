import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next } = data;
  const { operation } = data;
  const sign = ['+', '-', 'X', '/', '%'];
  if (buttonName === '+/-') {
    total *= -1;
    next *= 1;
    return { ...data, total, next };
  }

  if (sign.includes(buttonName)) {
    return { ...data, total: operate(total, next, operation) };
  }
  return data;
};

export default calculate;

import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next } = data;
  let { operation } = data;
  const sign = ['+', '-', 'X', '/'];
  if (buttonName === '+/-' && next) {
    return { ...data, next: (parseFloat(next) * -1).toString() };
  }
  if (buttonName === '+/-' && !next && total)
    return { ...data, total: (parseFloat(total) * -1).toString() };

  if (sign.includes(buttonName) && !total && next)
    return { total: next, next: null, operation: buttonName };

  if (sign.includes(buttonName) && !next && total)
    return { ...data, operation: buttonName };

  if (buttonName === 'AC') return { total: null, next: null, operation: null };

  if (buttonName === '=' && next && total) {
    return {
      total: operate(total, next, operation).toString(),
      next: null,
      operation: null,
    };
  }
  if (sign.includes(buttonName) && total && next) {
    return {
      ...data,
      total: operate(total, next, buttonName).toString(),
      operation: buttonName,
    };
  }
  if (buttonName === '.' && !total && next && !next.includes('.'))
    return { ...data, next: `${next}.` };
  if (buttonName === '.' && total && next && !next.includes('.'))
    return { ...data, next: `${next}.` };
  if (buttonName.match(/[0-9]/))
    return { ...data, next: next ? `${next}${buttonName}` : `${buttonName}` };

  if (buttonName === '%' && total && next) {
    console.log(next);
    return { ...data, next: operate(next, '100', '/').toString() };
  }

  if (buttonName === '%' && !total && next) {
    return {
      total: operate(next, '100', '/').toString(),
      next: null,
      operation: null,
    };
  }
  return { total, next, operation };
};

export default calculate;

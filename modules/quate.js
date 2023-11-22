import yahooFinance from 'yahoo-finance2';

// quote
export const quote = async () => {
  try {
    const data = await yahooFinance.quote('AAPL');
    return data;
  } catch (e) {
    return e;
  }
};

export const chart = async () => {
  try {
    const query = 'AAPL';
    const queryOptions = { period1: '2023-11-15', period2: '2023-11-17', return: 'object' };
    const result = await yahooFinance.chart(query, queryOptions);
    return result;
  } catch (e) {
    return e;
  }
};

export const historical = async () => {
  try {
    const query = 'AAPL';
    const queryOptions = { period1: '2023-11-15', period2: '2023-11-17' };
    const result = await yahooFinance.historical(query, queryOptions);
    return result;
  } catch (e) {
    return e;
  }
};

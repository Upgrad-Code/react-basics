import { TIMEOUT_SEC } from './config';

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(`Request is taking too long. More than ${s} seconds.`);
    }, s * 1000);
  });
};

export const GET_JSON = async (url, errMsg = 'Something went wrong.') => {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${response.status}, ${errMsg}, ${data.message}`);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

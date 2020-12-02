import { INCREMENT, DECREMENT } from "../const";

export const inc = (number = 1) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const dec = (payload = 1) => {
  return {
    type: DECREMENT,
    payload,
  };
};

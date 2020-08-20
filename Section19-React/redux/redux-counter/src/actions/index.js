export const increment = (num) => {
  return {
    // type = name of action
    type: 'INCREMENT',
    // payload is the action to take e.g. increment by 1
    payload: num
  };
};

export const decrement = () => {
  return {
    // type = name of action
    type: 'DECREMENT',
    // payload is the action to take e.g. increment by 1
    // payload: 1
  };
};
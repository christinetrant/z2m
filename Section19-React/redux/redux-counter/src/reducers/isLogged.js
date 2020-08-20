const loggedReducer = (state=false, action) => {
  switch(action.type) {
    // if user signed in we want to change it to opposite of state so it is true
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
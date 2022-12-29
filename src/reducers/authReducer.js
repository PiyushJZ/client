const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
};

const authreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    case 'SIGN_OUT':
      return action.payload;
    default:
      return state;
  }
};

export default authreducer;

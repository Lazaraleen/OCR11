import produce from "immer";

const initialState = {
    email: '',
    password: '',
    loggedIn: false,
}

const loginReducer = (state = initialState, action) => {
    return produce(state, draft => {
      switch (action.type) {
        case 'UPDATE_EMAIL':
          draft.email = action.payload;
          break;
        case 'UPDATE_PASSWORD':
          draft.password = action.payload;
          break;
        case 'LOGIN':
          draft.loggedIn = true;
          break;
        case 'LOGOUT':
          draft.loggedIn = false;
          break;
        default:
          break;
    }
});
};

export default loginReducer;
import { produce } from "immer";

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
      switch (action.type) {
        case 'LOGIN_SUCCESS':
          draft.isAuthenticated = true;
          draft.user = action.payload;
          draft.error = null;
          break;
        case 'LOGIN_FAILURE':
          draft.isAuthenticated = false;
          draft.user = null;
          draft.error = action.payload;
          break;
        case 'LOGOUT':
          draft.isAuthenticated = false;
          draft.user = null;
          draft.error = null;
          break;
        default:
          break;
      }
    });
  };
  
  export default authReducer;
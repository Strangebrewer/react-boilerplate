import { combineReducers } from 'redux';
import { authReducer, userReducer } from './auth_reducer';
import * as Auth from '../action_types/auth_types';

const appReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
});

const rootReducer = (state, action) => {
   if (action.type === Auth.UNAUTHENTICATED) {
      state = undefined;
   }
   return appReducer(state, action);
}

export default rootReducer;
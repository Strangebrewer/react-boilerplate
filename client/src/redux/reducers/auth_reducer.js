import * as Auth from '../action_types/auth_types';

export function authReducer(state = { authenticated: false, error: null }, action) {
   switch (action.type) {
      case Auth.AUTHENTICATED:
         return { ...state, authenticated: true }
      case Auth.UNAUTHENTICATED:
         return { ...state, authenticated: false }
      case Auth.AUTHENTICATION_ERROR:
         return { ...state, error: action.payload }
      default: return state;
   }
}

export function userReducer(state = {}, action) {
   switch (action.type) {
      case Auth.SET_CURRENT_USER:
         return { ...action.payload }
      default: return state;
   }
}
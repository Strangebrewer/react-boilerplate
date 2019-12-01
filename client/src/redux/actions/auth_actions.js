import * as Auth from '../action_types/auth_types';
import AuthAPI from '../../api/Authentication';

export const getCurrentUser = () => dispatch => {
   return new Promise(async (deliver, reneg) => {
      try {
         const response = await AuthAPI.getCurrentUser();
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({ type: Auth.SET_CURRENT_USER, payload: response.data.user });
         deliver(response)
      } catch (e) {
         dispatch({ type: Auth.UNAUTHENTICATED });
         reneg(e);
      }
   })
}

export const signup = credentials => dispatch => {
   return new Promise(async (resolve, reject) => {
      try {
         const response = await AuthAPI.signup(credentials);
         localStorage.setItem('token', response.data.token);
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({ type: Auth.SET_CURRENT_USER, payload: response.data.user });
         resolve(response);
      } catch (e) {
         reject(e);
         dispatch({
            type: Auth.AUTHENTICATION_ERROR,
            payload: e.response.data.error
         });
      }
   });
}

export const login = (credentials) => dispatch => {
   return new Promise(async (resolve, reject) => {
      try {
         const response = await AuthAPI.login(credentials);
         localStorage.setItem('token', response.data.token);
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({ type: Auth.SET_CURRENT_USER, payload: response.data.user });
         resolve(response);
      } catch (e) {
         reject(e);
         dispatch({
            type: Auth.AUTHENTICATION_ERROR,
            payload: e.response.data.error
         });
      }
   });
}

export function logout() {
   return dispatch => {
      localStorage.removeItem('token');
      dispatch({ type: Auth.UNAUTHENTICATED });
   }
}
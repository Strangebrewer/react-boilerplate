import API from './API';

export default {
   signup(credentials) {
      return API().post('/users/signup', credentials);
   },
   login(credentials) {
      return API().post('/users/login', credentials);
   },
   getCurrentUser() {
      return API().get('/users');
   },
   updateCurrentUser(update) {
      return API().put('/users', update);
   },
   updatePassword(update) {
      return API().put('/users/password', update);
   },
   deleteUser(id) {
      return API().delete(`/users/${id}`);
   }
}
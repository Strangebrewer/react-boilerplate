import bcrypt from 'bcryptjs';
import { sign } from '../passport';

class User {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use this model');
      this.User = schema;
   }

   async login(req_body) {
      const { username, password } = req_body;
      const response = await this.User.findOne({ username });

      if (!response)
         return { error: 'That\'s a bogus username, Doofy.' };

      const passwordValid = this.checkPassword(password, response.password);
      if (passwordValid) {
         const { _id, email, first_name, last_name, username } = response;
         const token = sign({ id: _id, username });
         const user = { _id, email, first_name, last_name, username };
         return { token, user };
      } else {
         return { error: 'Who you tryin\' to fool? That ain\'t yo password!' };
      }
   }

   async signup(req_body) {
      const { username, email } = req_body;

      if (!this.validateUsername(username))
         return { error: 'Usernames must be letters and numbers only' };

      const user_taken = await this.User.findOne({ username });
      if (user_taken)
         return { error: 'That username is already taken.' };

      if (email && !this.validateEmail(email))
         return { error: 'You must provide a valid email address.' };

      const email_taken = await this.User.findOne({ email });
      if (email && email_taken)
         return { error: 'That email has already been used.' };

      const password = this.hashPassword(req_body.password);
      req_body.password = password;
      const { _id } = await this.User.create(req_body);

      const token = sign({ id: _id, username });
      const user = { _id, username }

      return { token, user };
   }

   async updateUser(req_body, req_user) {
      const { username, email } = req_body;
      if (username && username !== req_user.username) {
         if (!this.validateUsername(username))
            return { error: 'Usernames must be letters and numbers only' };

         const user_taken = await this.User.findOne({ username });
         if (user_taken)
            return { error: 'That username is already taken.' };
      }

      if (email && email !== req_user.email) {
         if (!this.validateEmail(email))
            return { error: 'You must provide a valid email address.' };

         const email_taken = await this.User.findOne({ email });
         if (email && email_taken)
            return { error: 'That email has already been used.' };
      }

      const response = await this.User.findByIdAndUpdate(req_user.id, req_body, { new: true });
      const { _id, username, email, first_name, last_name } = response;
      const user = { _id, username, email, first_name, last_name }

      return user;
   }

   async updatePassword(req_body, req_user) {
      const { id, password } = req_user;
      const { current_password, new_password } = req_body;
      const passwordValid = this.checkPassword(current_password, password);

      if (passwordValid) {
         const pw = this.hashPassword(new_password);
         const response = await this.User.findByIdAndUpdate(id, { password: pw });
         const { _id, username, email, first_name, last_name } = response;
         const user = { _id, username, email, first_name, last_name };
         return user;
      } else {
         return { error: 'Current password is incorrect.' };
      }
   }

   validateUsername(username) {
      const test = /^[a-zA-Z0-9]+$/.test(username);
      if (!test)
         return false;
      return true;
   }

   validateEmail(email) {
      const test = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
      if (!test) return false;
      return true;
   }

   checkPassword(input_password, password) {
      return bcrypt.compareSync(input_password, password);
   }

   hashPassword(plain_text_password) {
      return bcrypt.hashSync(plain_text_password, bcrypt.genSaltSync(10), null);
   }
}

export default User;

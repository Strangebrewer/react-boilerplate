import User from '../models/User';
import UserSchema from '../models/UserSchema';

const user_model = new User(UserSchema);

export async function getCurrentUser(req, res) {
   try {
      const response = await UserSchema.findById(req.user._id);

      const { _id, username, email, first_name, last_name } = response;
      const user = { _id, username, email, first_name, last_name };

      const user_data = { user };

      res.json(user_data);
   } catch (e) {
      console.log('e in UserController.getCurrentUser catch block:::', e);
      res.status(500).send({ error });
   }
}

export async function signup(req, res) {
   try {
      const response = await user_model.signup(req.body);
      if (response.error)
         return res.status(400).send({ error: response.error });

      res.json(response);
   } catch (e) {
      console.log('e in UserController.signup catch block:::', e);
      res.status(418).send({
         error: e.message
      });
   }
}

export async function login(req, res) {
   try {
      const response = await user_model.login(req.body, res);

      if (response.error) {
         return res.status(400).send({ error: response.error });
      }

      const { user, token } = response;
      const user_data = { user, token };
      res.json(user_data);
   } catch (e) {
      console.log('e in UserController.login catch block:::', e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function put(req, res) {
   try {
      const user = await user_model.updateUser(req.body, req.user);
      if (user.error)
         return res.status(400).send({ error: response.error });

      res.json(user);
   } catch (e) {
      console.log('e in UserController.put catch block:::', e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function updatePassword(req, res) {
   try {
      const user = await user_model.updatePassword(req.body, req.user);
      if (user.error)
         return res.status(400).send({ error: response.error });
         
      res.json(user);
   } catch (e) {
      console.log('e in UserController.updatePassword catch block:::', e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function remove(req, res) {
   try {
      const user = await UserSchema.findByIdAndDelete(req.params.id);
      res.json(user);
   } catch (e) {
      console.log('e in UserController.remove catch block:::', e);
      res.status(500).send({
         error: e.message
      });
   }
}
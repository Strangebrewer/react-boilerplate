import express from 'express';
const router = express.Router();
import isAuthenticated from '../policies/isAuthenticated';
import * as UserController from '../controllers/UserController';

router.route('/')
   .get(isAuthenticated, UserController.getCurrentUser)
   .put(isAuthenticated, UserController.put);

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.put('/password', isAuthenticated, UserController.updatePassword);

router.delete('/:id', isAuthenticated, UserController.remove);

export default router;
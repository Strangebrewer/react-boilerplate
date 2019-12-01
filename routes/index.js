import express from 'express';
const router = express.Router();
import path from 'path';

import user_routes from './users';

router.use('/users', user_routes);

// If no API routes are hit, send the React app
// Without this, if you refresh or load the page
//    on anything but the base url (i.e. "/")
//    it will respond with a 'Cannot GET' error because the server
//    is trying to respond to that url from the back end
//    rather than letting react-router handle it on the front end
// So this ensures the routing will work properly;
//    it is important for when a user either types the url themselves
//    or saves the page as one of the routes rather than the base url.
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// useful for creating a base_routes file if you will have many routes that share similar logic...
function addUrlToReqBody(req, res, next) {
   req.body.url = req.baseUrl.replace('/', '');
   next();
}

export default router;
const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };
    console.log(payload);

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // function for our authenticated routes
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
        token = token
            .split(' ')
            .pop()
            .trim();
    }

    if (!token) {
      return req;
  }
    // verify token and get user data out of it
    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
  } catch {
      console.log('Invalid token');
  }
  // return updated request object
  return req;
  }
};
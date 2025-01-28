const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//In this code, if there is an error during database operation, it will not be handled properly and will cause the server to crash.  The error will not be sent back to the client.
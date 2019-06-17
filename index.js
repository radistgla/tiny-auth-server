const express = require('express');
const moment = require('moment');
const uuid = require('uuid');
const cors = require('cors');

const user = {
  name: 'testuser@test.com',
  password: 'testpassword'
};

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.name && password === user.password) {
    const expiresIn = moment()
      .utc()
      .add(1, 'days')
      .format();

    res.status(200).send({
      token: uuid.v4(),
      expiresIn
    });

    return;
  }

  res.status(401).send({
    error: 'wrong username or password'
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

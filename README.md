## Prepare

> \$ npm ci

## local run

> \$ npm run start

## Sending request

Send POST request to `http://localhost:3000/login` with `application/json` content type. Body should be `{username: 'testuser@test.com', password: 'testpassword'}`

## Correct credentials

In case of correct credentials received, server will respond with 200 OK status code and `token` and `expiresIn` fields. `expiresIn` field is `ISO-0861` UTC formatted.

## Incorrect credentials

In case of incorrect credentials received, server will respond with 401 Unauthorized status code.

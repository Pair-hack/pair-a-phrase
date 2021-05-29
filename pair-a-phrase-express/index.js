require("dotenv").config();
const express = require('express');
const App = express();
const PORT = 8080;
const BodyParser = require("body-parser");
const morgan = require('morgan');
const axios = require('axios');
const { v4: uuidv4 } = require("uuid");

App.use(morgan('dev'))
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());


App.post('/translate', function(req, res) {
  console.log("req from backend: ", req.body);

  const string = req.body.string;
  const startLang = req.body.startLang;
  const endLang = req.body.endLang;

  const subscriptionKey = process.env.SUBSCRIPTION_KEY
  var endpoint = "https://api.cognitive.microsofttranslator.com"

  // Add your location, also known as region. The default is global.
  // This is required if using a Cognitive Services resource.
  var location = "global";

  axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Ocp-Apim-Subscription-Region": location,
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    params: {
      "api-version": "3.0",
      from: startLang,
      to: [startLang, endLang],
    },
    data: [
      {
        text: string,
      },
    ],
    responseType: "json",
  }).then((result) => {
    console.log('result from backend: ', result.data);
    return res.send(result.data);
  })
    .catch(err => console.log('translation err: ', err))
});

App.post('/register', (req, res) => {
  console.log('req.body in register: ', req.body);
  const authObject = { "PRIVATE-KEY": "a1658897-7d30-4c58-a8f0-7ae5738f4e85" }
  const data = {
    "username": req.body.username,
    "secret": req.body.password,
    "first_name": req.body.firstName,
    "last_name": req.body.lastName,
    "avatar": req.body.avatar,
  }

  axios.post('https://api.chatengine.io/users/', data , { headers: authObject },)
    .then((result) => {
      console.log('registration was successful: ', result.data);
      return res.send(result.data);
    })

  // axios({
  //   method: 'post',
  //   url: 'https://api.chatengine.io/users/',
  //   headers: { "PRIVATE-KEY": "a1658897-7d30-4c58-a8f0-7ae5738f4e85" },
  //   data: {
  //     "username": req.body.username,
  //     "secret": req.body.password,
  //     "first_name": req.body.firstName,
  //     "last_name": req.body.lastName,
  //     "avatar": req.body.avatar
  //   }
  // });


});


App.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
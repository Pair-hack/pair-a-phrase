const axios = require('axios');

const stringTranslator = (string, startLang, endLang) => {

  return axios.post("https://pair-a-phrase-api.herokuapp.com/translate", {
    "string": string,
    "startLang": startLang,
    "endLang": endLang
  })

}


export default stringTranslator;
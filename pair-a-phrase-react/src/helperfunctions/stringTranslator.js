const axios = require('axios');

const stringTranslator = (string, startLang, endLang) => {

  return axios.post("/translate", {
          "string": string,
          "startLang": startLang,
          "endLang": endLang
        })

}


export default stringTranslator;
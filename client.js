const axios = require('axios');

const data = {
  data: 'O Hi this a test Car River Deer Car Bear and'
  //data: 'Hi all how are you doing this is a good day'
};

axios.post('https://desolate-citadel-17814.herokuapp.com/getWordLengthFrequency', data)
  .then((res) => {
    console.log();
    console.log("Sentence: " + String(JSON.stringify(data['data'])));
    console.log();

    var wordLength = res.data.split(/\W+/);

    var output = [];

    for (let i = 0; i < 10; i++) {
      output.push({
        'Words with': i + 1, value: parseInt(wordLength[i])
      })
    }

    console.table(output);

  }).catch((err) => {
    console.error(err);
  });



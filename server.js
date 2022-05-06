var express = require('express')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
const MAX_LENGTH_WORD = 10;

app.post('/getWordLengthFrequency', function (req, res) {
  console.log("post requested received with data: ");

  var data = req.body.data;

  console.log(data);

  const wordLength = data.split(/\W+/);
  var array = [];

  for (let words of wordLength) {
    array.push(words.toString().length);
  }

  array.sort();
  var result = new Array(MAX_LENGTH_WORD);
  result.fill(0);

  if (array.length >= 1) {
    var value = array[0];
    var add = 1;
    var i = 1;

    for (; i < array.length; i++) {
      if (value == array[i]) {
        add++;
      } else {
        result[value - 1] = add;
        value = array[i];
        add = 1;
        if (i == (array.length - 1)) {
          result[value - 1] = add;
        }
      }
    }
  }

  var resultStr = "";

  for (var i = 0; i < result.length; i++) {
    resultStr = resultStr + result[i] + " ";
  }

  console.log("sending response");
  res.send(resultStr);
  res.end();

})

app.listen(SERVER_PORT, () => {
  console.log("Server listening on port: " + SERVER_PORT);
})
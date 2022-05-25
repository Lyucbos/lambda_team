const https = require("https");
const http = require("http");
var url = "https://jsonbase.com/lambdajson_type1/955";

function sorting() {
  var trues = 0;
  var falses = 0;

  const req = https.request(url, (res) => {
    res.on("data", (data) => {
      let afterParse = JSON.parse(data);
      console.log(afterParse.isDone);
      if (afterParse.isDone === true) {
        trues++;
      } else {
        falses++;
      }
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
  console.log("Значений True: " + await trues);
  console.log("Значений False: " + falses);
}
sorting();

const https = require("https");

var urls = [
  "https://jsonbase.com/lambdajson_type1/793",
  "https://jsonbase.com/lambdajson_type1/955",
];
var trues = 0;
var falses = 0;

function sorting(url) {
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
}
function start() {
  urls.map((url) => {
    console.log(url);
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
  });
}
start();

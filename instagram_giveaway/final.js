const fs = require("fs");
var time = performance.now();

function uniqueValues() {
  var all_names = [];
  var out_count = 0;
  while (out_count !== 20) {
    var text = "out" + out_count + ".txt";
    var lines = fs.readFileSync(text, "utf8").split("\n");
    lines.map((line) => {
      all_names.push(line);
    });
    out_count += 1;
  }
  all_names = [...new Set(all_names)];
  console.log("Unique Values: " + all_names.length);
}

function existInAllFiles() {
  var all_names = [];
  var out_count = 0;
  while (out_count !== 20) {
    var text = "out" + out_count + ".txt";
    var lines = fs.readFileSync(text, "utf8").split("\n");
    lines = [...new Set(lines)];
    lines.map((line) => {
      all_names.push(line);
    });
    out_count += 1;
  }
  var counts = {};
  var full_logs = 0;
  all_names.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] >= 20) {
      full_logs++;
    }
  });
  console.log("Exist in all files: " + full_logs);
}

function existInAtLeastTen() {
  var all_names = [];
  var out_count = 0;
  while (out_count !== 20) {
    var text = "out" + out_count + ".txt";
    var lines = fs.readFileSync(text, "utf8").split("\n");
    lines = [...new Set(lines)];
    lines.map((line) => {
      all_names.push(line);
    });
    out_count += 1;
  }
  var counts = {};
  var half_logs = 0;
  all_names.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] >= 10 && counts[x] < 20) {
      half_logs++;
    }
  });
  console.log("Exist at least in ten: " + half_logs);
}

uniqueValues();
existInAllFiles();
existInAtLeastTen();

time = performance.now() - time;
console.log("Время выполнения = ", time);

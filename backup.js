const fs = require("fs");

function sorting() {
  var vacations = fs.readFileSync("vacations.json");
  var data = JSON.parse(vacations);
  //   console.log(data[17]);
  var ni_data = {};
  console.log(typeof ni_data);
  for (var i = 0; i < data.length; i++) {
    var dates = [
      {
        startDate: data[i].startDate,
        endDate: data[i].endDate,
      },
    ];
    var new_data = {
      userId: data[i].user._id,
      name: data[i].user.name,
      weekendDates: dates,
    };

    let data1 = JSON.stringify(new_data, null, 2);
    ni_data.push(data1);
  }
  fs.writeFileSync("new_vaca.json", ni_data);
}

sorting();

// code for writing
// var data = // here will be new data after sorting
//     let data1 = JSON.stringify(data, null, 2) // here data becomes .json readable text
// fs.writeFileSync('new_vaca.json', data1 ) //here data after becoming data1 goes into new .json file

const fs = require("fs");
const { emit } = require("process");

function sorting() {
  var vacations = fs.readFileSync("vacations.json");
  var data = JSON.parse(vacations);
  var ni_data = [];
  for (var i = 0; i < data.length; i++) {
    var new_data = {
      userId: data[i].user._id,
      name: data[i].user.name,
      weekendDates: {
        startDate: data[i].startDate,
        endDate: data[i].endDate,
      },
    };
    for (ids in ni_data) {
      if (data[i].user._id === ni_data[ids].userId) {
        new_data.weekendDates += ni_data[ids].weekendDates;
        delete ni_data[ids];
      }
    }
    ni_data.push(new_data);
  }
  var final = [];
  for (var key in ni_data) {
    if (ni_data[key] !== null) {
      final.push(ni_data[key]);
    }
  }
  console.log(final.length);
  var to_data = JSON.stringify(final, null, 3);
  fs.writeFileSync("new_vaca.json", to_data);
}

sorting();

const jsonfile = require("jsonfile");
const FILE_PATH = "./hit.json";
const moment = require("moment");
const DATE = moment().format();
const data = { data: DATE };
const simpleGit = require("simple-git");

jsonfile.writeFile(FILE_PATH, data, (err) => {
  if (err) {
    console.error("Error writing to JSON file:", err);
  } else {
    console.log("Date has been written to the JSON file successfully.");
  }
});

simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE });

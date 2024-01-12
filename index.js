import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
import jsonfile from "jsonfile";

const FILE_PATH = "./hit.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();

  const x = random.int(0, 54);
  const y = random.int(0, 6);

  // Generate a random date within the last year, adding weeks and days
  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: DATE,
  };

  console.log(DATE);

  // Write the data to a JSON file
  jsonfile.writeFile(FILE_PATH, data, () => {
    // Add the file, commit with the generated date, and recursively call makeCommit
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

// Call makeCommit with the desired number of commits (e.g., 500)
makeCommit(1000);

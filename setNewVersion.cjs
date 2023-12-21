// nodejs script that adds a new version to the project. (git(local, and remote), package.json and a commit message)
// example: node setNewVersion.js 0.0.1

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

let v = process.argv[2];
if (v.charAt(0) === "v") {
  v = v.substring(1);
}

function editJsonFile(path, key, value, callback) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const jsonData = JSON.parse(data);

    jsonData[key] = value;

    fs.writeFile(path, JSON.stringify(jsonData), "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(path + " file updated successfully.");
      if (typeof callback === "function") callback();
    });
  });
}

editJsonFile(path.join(__dirname, "/package.json"), "version", v, () => {
  exec("git tag v" + v);
  exec(
    `npm run prettierNewVersion; git add . ; git commit -m "build: 🔖 v${v}"; git push; git push --tags`,
  );
});

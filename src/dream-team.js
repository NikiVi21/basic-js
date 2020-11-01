const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let rez = [];
  if (!(members instanceof Array)) return false;
  members.map((elem) => {
    if (typeof elem === "string") {
      rez.push(elem.trim()[0].toUpperCase());
    }
  });
  return rez.sort().join("");
};

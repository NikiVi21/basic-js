const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.flat().map((el) => {
    el === "^^" ? count++ : 0;
  });
  return count;
};

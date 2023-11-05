const fs = require("fs");
const DATA_READ = "../data/words.txt";

fs.readFile(DATA_READ, "utf8", getContent);

function getContent(error, datos) {
  const arrData = datos.split(" ");

  let countWords = {};
  arrData.forEach((word) => {
    let hasKeyWord = Object.hasOwn(countWords, word);
    if (!hasKeyWord) {
      countWords[word] = 1;
    } else {
      countWords[word]++;
    }
  });

  const response = Object.entries(countWords).flat().join("");
  console.log(response);
}

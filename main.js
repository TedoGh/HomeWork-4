const replaceString = (string, valueToReplace, valueToReplaceWith) => {
  const parts = string.split(valueToReplace);
  const replacedString = parts.join(valueToReplaceWith);
  return replacedString;
};

const originalString = "The colour of the sky changes throughout the day.";
const newString = "color";

const resultReplacedString = replaceString(originalString, "colour", newString);
console.log(resultReplacedString);

const capitalString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

const capitalWords = (words) => {
  return words
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const resultCapitalWords = capitalWords(capitalString);
console.log(resultCapitalWords);

const users = [
  {
    name: "Lasha",
    age: 30,
  },
  {
    name: "Saba",
    age: 20,
  },
];

const sortName = (users) => {
  let newSortName = [];
  newSortName = users.sort(
    (firstUser, secondUser) => firstUser.age - secondUser.age
  );
  return newSortName;
};

const resultSortName = sortName(users);
console.log(resultSortName);

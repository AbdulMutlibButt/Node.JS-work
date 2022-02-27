const fs = require("fs");

const addNote = function (title, body) {
  const getData = loadNote();
  const filterData = getData.filter((a) => a.title === title);
  debugger;

  if (filterData.length === 0) {
    getData.push({ title: title, body: body });
  } else {
    console.log("same data");
  }
  saveData(getData);
};
const saveData = function (data) {
  const strng = JSON.stringify(data);
  fs.writeFileSync("note.json", strng);
};

const loadNote = function () {
  try {
    const data = fs.readFileSync("note.json");
    const str = data.toString();
    return JSON.parse(str);
  } catch {
    return [];
  }
};
const removeData = function (title, body) {
  const getData = loadNote();
  const filterData = getData.filter((data) => data.title !== title);
  if (filterData.length < getData.length) {
    console.log("note remove");
  } else {
    console.log("not remove");
  }
  saveData(filterData);
};

module.exports = {
  addNote: addNote,
  removeNote: removeData,
};

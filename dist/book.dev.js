"use strict";

var fs = require("fs");

var addNote = function addNote(title, body) {
  var getData = loadNote();
  var filterData = getData.filter(function (a) {
    return a.title === title;
  });
  debugger;

  if (filterData.length === 0) {
    getData.push({
      title: title,
      body: body
    });
  } else {
    console.log("same data");
  }

  saveData(getData);
};

var saveData = function saveData(data) {
  var strng = JSON.stringify(data);
  fs.writeFileSync("note.json", strng);
};

var loadNote = function loadNote() {
  try {
    var data = fs.readFileSync("note.json");
    var str = data.toString();
    return JSON.parse(str);
  } catch (_unused) {
    return [];
  }
};

var removeData = function removeData(title, body) {
  var getData = loadNote();
  var filterData = getData.filter(function (data) {
    return data.title !== title;
  });

  if (filterData.length < getData.length) {
    console.log("note remove");
  } else {
    console.log("not remove");
  }

  saveData(filterData);
};

module.exports = {
  addNote: addNote,
  removeNote: removeData
};
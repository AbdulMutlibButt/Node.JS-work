const notes = require('./book')

const validators = require("validator");
console.log(validators.isEmail("aaaa@gmail.com"));
const yarg = require("yargs");
yarg.command({
  command: "read",
  describe: "it will read the notes",
  handler: function () {
    console.log("reading notes");
  },
});
yarg.command({
  command: "write",
  describe: "it will write the notes",
  handler: function () {
    console.log("writing notes");
  },
});

yarg.command({
    command: "add",
    describe: "adding a body",
    builder: {
      title: {
          describe: "adding a title",
          demandOption: true,
          type: "string",
        },body: {
          describe: "adding a body",
          demandOption: true,
          type: "string",
        },
    },
    handler: function (argv) {
      notes.addNote(argv.title,argv.body)
  },
  });

  yarg.command({
    command: "remove",
    describe: "adding a body",
    builder: {
      title: {
          describe: "adding a title",
          demandOption: true,
          type: "string",
        },body: {
          describe: "adding a body",
          demandOption: true,
          type: "string",
        },
    },
    handler: function (argv) {
      notes.removeNote(argv.title,argv.body)
  },
  });
    
console.log(yarg.argv);

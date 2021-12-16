const fs = require("fs");

const md = `
# This is a new file

We can write stuff into the file with fs.writeFile

So far we have learnt: 
fs.readdir
fs.readFile
fs.writeFile

`;


fs.writeFile("./assets/notes.md", md.trim(), err => {
    if(err) {
        throw err;
    }

    console.log("File has been saved!");
});
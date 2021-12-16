const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileText = "";

readStream.on("data", data => {
    console.log(`I read ${data.length -1} chars of text`);
    fileText += data;
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("finished");
    console.log(`In total I read ${fileText.length -1} chars of text`);
});
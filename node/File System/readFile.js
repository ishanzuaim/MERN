const fs = require("fs");

fs.readFile("./assets/alex.jpge", (err, img) => {
    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log(img);
});


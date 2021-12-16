const cp = require("child_process");

cp.exec("echo lol", (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
});

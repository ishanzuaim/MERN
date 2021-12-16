const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Alesx \n");
questionApp.stdin.write("Alsex \n");

questionApp.stdout.on("data", data => {
    console.log(`From the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});
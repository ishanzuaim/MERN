const { unwatchFile } = require("fs");
const path = require("path");
// const test2Path = path.join(__dirname, "test1", "test2");
// console.log(test2Path);

const { log } = require("util");

// util.log( path.basename(__filename));
// util.log(" ^ The name of the current file");


const {getHeapStatistics} = require("v8");
log(getHeapStatistics());
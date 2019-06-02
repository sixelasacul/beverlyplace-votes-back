const fs = require("fs");

const path = "./data.json";

function readData() {
    const string = fs.readFileSync(path, "UTF-8");
    const json = JSON.parse(string);
    return json;
}

function writeData(data) {
    const string = JSON.stringify(data);
    fs.writeFileSync(path, string);
}

function isEmpty() {
    const content = fs.readFileSync(path, "UTF-8");
    return content.length == 0;
}

module.exports = {
    readData,
    writeData,
    isEmpty
};
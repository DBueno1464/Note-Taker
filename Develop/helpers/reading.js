const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

const notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));



const uuid = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);


module.exports = { writeFile, uuid, notesData };
   
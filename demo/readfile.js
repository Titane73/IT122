const fs = require('fs');
fs.readFile('test.rtf', (err, data) => {
    if(err) return console.error(err);
    console.log(data.toString());
})
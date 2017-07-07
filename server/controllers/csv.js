var converter = require('csvtojson');

exports.csvToJson = function (req, res) {
    debugger;
    if (req.files) {
        res.send(req.files);
    } else {
        res.send('hi');
    }
}
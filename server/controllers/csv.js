var converter = require('csvtojson');
var fs = require('fs');

exports.csvToJson = function (req, res, next) {
   
    if (req.file) {
        let data = [];

        converter()
            .fromFile(req.file.path)
            .on('json', (jsonObj) => {
                data.push(jsonObj);
            })
            .on('done', (error) => {
                const headers = Object.keys(data[0]);
                res.send({
                    _headers: headers,
                    data: data
                });
                fs.unlink(req.file.path, () => {});
            });
    }

}

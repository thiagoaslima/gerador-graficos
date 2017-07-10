var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function(app){
    var teste = require('./controllers/teste');
    app.get('/teste', teste);
    
    var csv = require('./controllers/csv');
    app.post('/csv', upload.single('csv'), csv.csvToJson);
}

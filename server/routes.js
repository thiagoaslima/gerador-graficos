module.exports = function(app){
    var teste = require('./controllers/teste');
    app.get('/teste', teste);
    
    var csv = require('./controllers/csv');
    app.post('/csv', csv.csvToJson);
}
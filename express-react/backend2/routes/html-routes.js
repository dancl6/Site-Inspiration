const path = require('path');
// require mysql in node modules to use in
const mysql = require('mysql');

module.exports = function(app, connection) {
    // if no matching route is found default to index.html
    app.get('/', function(req, res) {
        // res.send('Hello from simple react project');
        connection.query('SELECT * FROM "simple_react_sql_db".user;', function(err, data) {
            (err)?res.send(err):res.json({users: data});
        });
    });
}
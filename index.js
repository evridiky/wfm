const { application } = require('express');
const { sql } = require('msnodesqlv8');

var Connection = require('tedious').Connection;  
var config = {  
server: 'localhost:1433',
authentication: {
    type: 'default',
    options: {
        userName: 'sa', 
        password: 'your_password'  
    }
},
options: {
    encrypt: true,
    database: 'Apofoitoi UNIPI'  
}
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
// If no error, then good to proceed.
console.log("Connected");  
});

connection.connect();
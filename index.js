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

function 
   executeStatement() {
      request = new Request("select * from tblStudents", function(err, rowCount) {
         if(err) {
            console.log(err);
         } 
         else {
            console.log(rowCount + ' rows');
         }
      });

      request.on('row', function(columns) {
         columns.forEach(function(column) {
            console.log(column.value);
         });
      });

      connection.execSql(request);
   }

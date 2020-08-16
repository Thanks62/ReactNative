const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   port: '3306',
//   password: '123456',
//   database: 'user',
// });
module.exports = {
  query: function (sql, callback) {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: '3306',
      password: '123456',
      database: 'user',
    });
    connection.connect(function (err) {
      if (err) {
        console.log('connected failed');
        throw err;
      }
      connection.query(sql, function (err, result) {
        if (err) {
          console.log('query err');
          throw err;
        }
        callback && callback(JSON.parse(JSON.stringify(result)));
        connection.end(function (err) {
          if (err) {
            console.log('end err');
            throw err;
          }
        });
      });
    });
  },
};

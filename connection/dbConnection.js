const db = require('mysql2')
const pool=db.createPool({
    host : 'eu-cdbr-west-02.cleardb.net',
    user :'b69ce6a6bce2cc',   
    database : 'heroku_efe922b1038eb7f',
    password : '81ec1881'
});

module.exports=pool.promise();
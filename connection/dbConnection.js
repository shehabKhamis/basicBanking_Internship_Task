const db = require('mysql2')
const pool=db.createPool({
    host : 'localhost',
    user :'root',
    database : 'the_sparks_foundation',
    password : 'root'
});

module.exports=pool.promise();
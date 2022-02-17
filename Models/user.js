const db = require('../connection/dbConnection')


module.exports = class User{

static get()
{
    return db.execute('SELECT * FROM users') ;
}

static update(sender,rec,amount){
    
        
       return db.execute('UPDATE `users` SET `balance` = `balance` - ? WHERE (`name` = ?)',[amount,sender]).then(()=>
        {
             db.execute('UPDATE `users` SET `balance` = `balance` + ? WHERE (`name` = ?)',[amount,rec])
        }) 
    
}


static checkBal(sender){
    return db.execute('SELECT balance FROM users WHERE name = ?',[sender])
    
} 



}
const db = require('../connection/dbConnection')

module.exports=class Transaction {

constructor(sender,recipient,amount)
{
    this.sender=JSON.parse(sender).name
    this.recipient=JSON.parse(recipient).name
    this.amount=amount
}


  save(){
   return db.execute('INSERT INTO transactions (sender,recipient,amount) VALUES (?,?,?)',[this.sender,this.recipient,this.amount])
}

static get(){
    return db.execute('SELECT * FROM transactions')
}






}

const Transaction = require('../Models/transaction.js')

const User = require('../Models/user.js')




module.exports.getTransfer=(req,res,next)=>
{
    //__dirname is the path of the directory contains that file (which is admin.js)
    // ../ go up one level
    User.get().then(([rows,fieldData])=>
{
    res.render('View-all-users',{clients : rows,pop : pop});
}).catch((err)=>{
    console.log(err)
})
    
    

}

let pop = null;


module.exports.getSender=(req,res)=>
{
    
    res.render('ViewSender',{sender : JSON.parse(req.body.sender)})



}



module.exports.getRecipient=(req,res)=>
{
    
    res.render('ViewRecipient',{recipient : JSON.parse(req.body.recipient)})



}

module.exports.postTransfer=(req,res)=>
{   
    
    
    
    if(req.body.amount>0 && Object.keys(req.body).length ==3 ){

        trans= new Transaction(req.body.sender,req.body.recipient,req.body.amount)
    User.checkBal(trans.sender).then((bal)=>
    {
        
        
           if (bal[0][0].balance>trans.amount)
           {
               let pop = null;
            trans.save().then(()=>{
                User.update(trans.sender,trans.recipient,trans.amount).then(()=>
                {
                    res.redirect('/admin/transaction')
    
                }).catch((err)=>
                {
                    console.log(err)
                })
                
             }).catch((err)=>{
                 console.log(err)
                })
            
           }
           else
           {
               pop = "There is no sufficient money !!"
               User.get().then(([rows,fieldData])=>
               {
                   res.render('View-all-users',{clients : rows,pop : pop});
                   pop=undefined
               }).catch((err)=>{
                   console.log(err)
               })
           }
       
    })
        
        
    }
    else
    {
        
        pop = "Please fill the required fields correctly !!"
        User.get().then(([rows,fieldData])=>
        {
            res.render('View-all-users',{clients : rows,pop : pop});
            pop=undefined
        }).catch((err)=>{
            console.log(err)
        })
    } 
    
}


module.exports.getTransactions=(req,res,next)=>
{
    Transaction.get().then(([rows])=>
    {
        res.render('Transactions',{transactions : rows})
    }).catch((err)=>{
        console.log(err)
    })
    
    
}


module.exports.getHome=(req,res,next)=>
{
    
    res.render('Home')
}
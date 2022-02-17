const express = require('express')

const transactionsController= require('../Controllers/transactions')

const router=express.Router();

const path = require('path')


router.get('/transfer',transactionsController.getTransfer)

router.post('/transfer',transactionsController.postTransfer)

router.post('/viewsender',transactionsController.getSender)

router.post('/viewrecipient',transactionsController.getRecipient)

router.get('/transaction',transactionsController.getTransactions)

router.get('/',transactionsController.getHome)


module.exports=router
const express = require('express')

const app = express()

const parser=require('body-parser')

const adminRoutes= require('./Routes/admin')

const _404Controller=require('./Controllers/404.js')

const db = require('./connection/dbConnection')

const path  = require('path')

app.set('view engine','ejs')
app.set('views','Views')

app.use(parser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);

app.use(_404Controller)
app.listen(process.env.PORT || 3000)

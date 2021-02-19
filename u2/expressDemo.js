var express = require('express')
var app = express()
var bodyParser= require('body-parser')

var urlEncodedParser=bodyParser.urlencoded({extended:false})

app.get('/',function (request,response){
    response.send('Hello Express!')
})
app.get('/admin',function (request,response){
    response.send('Hello Admin!')
})

app.get('/product',function (request,response){
    //parametreleri okuma
    console.log('ID : '+ request.query.id)
    console.log('CATEGORY ID : '+request.query.categoryId)
    response.send('Hello product!')
})

app.post('/product',urlEncodedParser,function (request,response){
    //parametreleri okuma
    console.log(request.body.name)
    response.send("Post islemi alindi")
})


app.delete('/product',function (request,response){
    response.send("Delete istegi alindi")
})



var server = app.listen(8080);
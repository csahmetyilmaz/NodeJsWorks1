let express = require('express')
let app = express()
let bodyParser = require('body-parser')

//Moteur de template
app.set('view engine', 'ejs')

//Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.get('/', (request, response) => {
    response.render('pages/index',{vari:'test Variable'})
})

app.post('/', (request,response)=>{
if (request.body.message==='' || request.body.message===''){
    response.render('pages/index',{error:"Vous n'avez pas entré de message"})
}
})


app.listen(8080)
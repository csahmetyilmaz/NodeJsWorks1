const http = require("http")
const express = require('express')
const app = express()  //Express den donen sey bir fonsiyondur. Onu app a aliyoruz ve hep onu kullaniyoruz.
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))


app.get("/", function (request, response) {
    response.sendFile('/index.html', {root: __dirname})
})

//Let's start with socket io
io.on('connection', socket => {
    //input output kismina baglanti durumunu kontrol ediyor
    console.log("Bir kullanici baglandi")

    socket.on('mesajvar', function (msg) {
    // Eger acik kanaldan birisi mesajvar gonderirse onu yakala


            io.emit('mesajvar', msg)
        //Yakaladigimiz bu mesaji tum kanallara emit(yayilma) yapiyoruz
        //birden fazla kullanici varsa iste onlarda acikta olan kanallara iletmis olur

    })

        socket.on('disconnect', function () {
        //herhangi bir kullanici cikis yaparsa bize bilgi dondurecek
            console.log("Bir kullanici cikis yapti")

        })
});


server.listen(8000, function () {
    console.log("Server basladi Bu sevdalar bosuna lee")
})
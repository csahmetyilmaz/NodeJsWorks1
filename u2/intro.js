var http = require('http')
var log = require('./log.js')
var sayHello = require('./exportsDemo')

http.createServer(function (request, response) {
    console.log(request.url)
    //Request le alakali kisimlar
    if (request.url == "/admin") {
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Admin Sayfasi</strong></body></html>')
    } else if (request.url == '/') {
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<html><body><strong>Anasayfa</strong></body></html>')
    } else if (request.url == '/customers') {
        response.writeHead(200,{'Content-Type':'application/json'})
        response.write(JSON.stringify({name:'Ahmet',lasName:'YILMAZ'}))
    }

    //Client i bilgilendirmek icin baslik gonder
    //response.writeHead(200,{'Content-Type':'text/html'})
    response.end() //burada mesaj yaziyoruz.
}).listen(8080)


log.information("<br>Sunucu yayina gecti")
console.log(sayHello());
//    log.information(city);
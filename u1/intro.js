    var http = require('http')
    http.createServer(function (request,response){
        //Client i bilgilendirmek icin baslik gonder
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end('Merhaba') //burada mesaj yaziyoruz.
    }).listen(8080)
var fs = require('fs')
fs.readFile('file.txt', "utf8", function (erreur, data) {
    if (erreur) {
        throw erreur;
    }
    console.log(data)
})

fs.writeFile('file2.txt', "Munire Meva", function (erreur) {
    if (erreur) {
        throw erreur;
    }
    console.log("wrote yazildi")
})

fs.appendFile('file2.txt', "Asude Erva", function (erreur) {
    if (erreur) {
        throw erreur;
    }
    console.log("wrote yazildi")
})
fs.unlink('file2.txt',  function (erreur) {
    if (erreur) {
        throw erreur;
    }
    console.log("Silindi")
})
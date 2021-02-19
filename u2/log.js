/*Burada bir log modulu yazacaz.
*Bunun icin obje notation u kullanicaz
* Iki fonksiyonla calisacak :
* birisi information icin digeri hatalar icin
*/
var log = {
    information: function (info) {
        console.log("information : " + info);
    },
    fault: function (fault) {
        console.log("fault message : " + fault);
    }
}

module.exports = log
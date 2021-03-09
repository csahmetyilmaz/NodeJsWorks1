//Burdaki problem x ve y nin degerinin kontrol edilememesi
function topla(x, y) {
    return x + y;
}
//burda type safe
function topla2(x, y) {
    return x + y;
}
var topla4 = function (x, y) {
    return x + y;
};
var topla5 = function (x, y) {
    //Burda optional olarak y yi istiyoruz ve icerde kontrol ettiriyoruz
    //Default veya optional biseyse son parametereye eklenir
    if (y) {
        return x + y;
    }
    return x;
};
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("ali", "hasan", "huseyin"));
console.log(topla(2, 3));
console.log(topla("ankara", 2));
console.log(topla2(2, 4));
console.log(topla4(4, 8));
console.log(topla5(5, 25));

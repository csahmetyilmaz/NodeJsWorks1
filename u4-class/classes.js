var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        odaSayisi = this._odaSayisi;
        pencereSayisi = this._pencereSayisi;
        kat = this._pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log("Yemek yenildi !");
    };
    return Ev;
}());
var ev = new Ev(2, 3, 5);
ev.yemekYe();

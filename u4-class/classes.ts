class Ev {
    _odaSayisi: number;
    _pencereSayisi: number;
    _kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        odaSayisi = this._odaSayisi;
        pencereSayisi = this._pencereSayisi;
        kat = this._pencereSayisi;
    }

    yemekYe() {
        console.log("Yemek yenildi !");
    }



}

class Kisi {
    private _isim: string;

    
    public get isim() : string {
        return this._isim;
    }

    
    public set isim(v : string) {
        this._isim = v;
    }
    
    

    kaydet(paraeters) {
        console.log("kaydedildi")
    }
}

let ev = new Ev(2, 3, 5);
ev.yemekYe();
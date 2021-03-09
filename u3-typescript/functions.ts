//Burdaki problem x ve y nin degerinin kontrol edilememesi
function topla(x, y) {
    return x + y;
}

//burda type safe
function topla2(x: number, y: number): number {
    return x + y;
}

let topla4 = function (x: number, y: number): number {
    return x + y;
}
let topla5 = function (x: number, y?: number): number {
    //Burda optional olarak y yi istiyoruz ve icerde kontrol ettiriyoruz
    //Default veya optional biseyse son parametereye eklenir
    if (y) {
        return x + y;
    }
    return x;
}

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli+" "+digerleri.join(" ");
} 

console.log(davetEt("ali","hasan","huseyin"));

console.log(topla(2, 3));
console.log(topla("ankara", 2));
console.log(topla2(2, 4));
console.log(topla4(4, 8));
console.log(topla5(5, 25));
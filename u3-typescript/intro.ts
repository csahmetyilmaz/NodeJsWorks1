function greeter(prenom: string) {
    return "Merhaba" + prenom
}

let message = greeter('Mesut')
console.log(message)

let nbr: number = 23
nbr = 10
nbr = 20.14

let city: string = "Paris"
city = "Lyon"

let isCorrect: boolean = true
isCorrect = false
isCorrect = true

let numbers:number[]=[1,2,3]
let numbers2:Array<number>=[1,2,3]

// Topple arrays definition : istedigim sirayla dizi ogelerinin tipini belirtebiirim.
let array1:[number,string,string]=[5,"Lyon","Strasbourg"]

// Any void undefined veri turleri
let valeur:any = "Genas"
valeur=2
valeur={}
//Geriye deger donmeyecekse bunu kullaniriz ve return kullanamayiz.
function greta():void{
    console.log("hi")
}

//let ve var farki : var ile tekrar tekrar ayni isimde degisken olusturabiliriz ama let bunu onler
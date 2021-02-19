var mongoose = require('mongoose')
var Customer = require('./customer')


mongoose.connect('mongodb+srv://mongoUser1:qMoMf4LOwyrBvzmC@cluster0.c402z.mongodb.net/myFirstDatabase1?retryWrites=true&w=majority', (error) => {
    if (!error) {
        console.log('connected to mongo db')
    }
})

 //Save islemi
var customer1=new Customer({
    name:"Mesut",
    city:"Antep"
})

customer1.save((error)=>{
    if (error){
        throw error;
    }
    console.log('Customer saved')
});

/* ismi ahmet olanlari getir
Customer.find({name:'Ahmet'},(error,data)=>{
    if (error){
        throw error;
    }
    console.log(data)
})
*/

/* Id ile arama

Customer.findById('602fa347bf5a3f3770e57eeb', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
})
*/

//Where kosuluyla aramak secmek
/*
Customer.find({}, (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
}).where('city').equals('Antep').limit(2).sort('-name').select('name');*/
/*
//Update islemleri

Customer.findById('602fa347bf5a3f3770e57eeb', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
    data.city='Silifke'
    data.save((error) =>{
        if (error){
            throw error;
        }
        console.log('Customer Updated')
    } )
})*/

/* Delete islemleri
Customer.findById('602fa347bf5a3f3770e57eeb', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
    data.remove((error) =>{
        if (error){
            throw error;
        }
        console.log('Customer Deleted')
    } )
})*/

/*
Customer.findOneAndUpdate({name:'Kevser YILMAZ'},{name:'Kevser ALICI'},(error,data)=>{
    if (error){
        throw error;
    }
    console.log(data)
})*/
/*

Customer.findByIdAndUpdate('602fa3ce2d4ebe0704163f1a', {name: 'Kevser ALICI YILMAZ'}, (error, data) => {
    if (error) {
        throw error;
    }
    console.log('Customer Updated')
})
*/

/* Delete by Id
Customer.findOneAndRemove({name:'Kevser ALICI YILMAZ'},(error,data)=>{
    if (error){
        throw error;
    }
    console.log(data)
})*/

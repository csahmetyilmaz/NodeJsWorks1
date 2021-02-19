var mongoose = require('mongoose')
//once bir schema nesnesi olusturuyorum.
var Schema = mongoose.Schema;

//Burda musteri semasi olusturuyorum.
var customerSchema = new Schema({
    name: String,
    city: String,
    created: Date
})

//Kayit zamanini otomatik almak icin kullanilir
customerSchema.pre('save',function (next){
    var currentDate = new Date();
    this.created=currentDate;
    next()
})

//Disariya cikarmak istedigim seyin ismini ve seklini belirtiyorum
var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
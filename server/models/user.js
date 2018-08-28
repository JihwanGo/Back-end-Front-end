const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({ //mongoDB 자바 스크립트 객체 그 자체를 넣고 쿼리 가능하고 , 확장시에 스키마 고려없이 사용하면서 구조 확장가능 .
    id : String,
    password : String,
    name : String,
    email : String,
    address : String,
    date : {type : Date, default : Date.now},
});

userSchema.set('toJSON', { virtuals : true});

module.exports = mongoose.model('User', userSchema);
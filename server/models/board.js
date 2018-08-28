const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
    writer : String,
    password : String,
    title : String,
    contents : String,
    comments : [{
        name : String,
        memo : String,
        date : {type : Date , default : Date.now}
    }],
    count : {type: Number, default: 0},
    date : {type : Date, default : Date.now},
    updated : {type : Boolean, default : false}
});

module.exports = mongoose.model('BoardContents', boardSchema);

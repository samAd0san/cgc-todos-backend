const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    status : {type : String, required : true},
    title : {type : String, required : true},
    description : {type : String},
    createdDate : {type : Date},
    updatedDate : {type : Date, default : Date.now}
});

module.exports = mongoose.model('todos',schema);
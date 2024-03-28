const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    status : {type : String, required : [true,'Status field is mandatory']},
    title : {type : String, required : [true,'Title is required']},
    description : {
        type : String,
        minLength : [4,'minimum 4 chars'],
        maxLength : [30, 'maximum 30 chars only']
    },
    createdDate : {type : Date},
    updatedDate : {type : Date, default : Date.now}
});

module.exports = mongoose.model('todos',schema);
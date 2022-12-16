<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

>>>>>>> 2b8e8f13f7744e5aeab940aaaab4fa0a2fb4462c
mongoose.model('ideas', IdeaSchema);
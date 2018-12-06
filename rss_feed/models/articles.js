var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    cleanURL: {
        type: String,
        requred: true
    },
    pubDate: {
        type: String,
        required: true
    }}, {collection: 'burg_activities'});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
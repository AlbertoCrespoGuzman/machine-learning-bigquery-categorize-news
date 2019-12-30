var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');


var newSchema = new Schema({
    category: {
        type : mongoose.Schema.ObjectId,
        ref: 'Category'
    },
	source:  {
        type: String
    },
    author:  {
        type: String
    },
    title:  {
        type: String
    },
    description:  {
        type: String
    },
    url:  {
        type: String
    },
    urlToImage:  {
        type: String
    },
    publishedAt:  {
        type: String
    },
    publishedAtTimeStamp:  {
        type: Number
    },
    up:  {
        type: Number,
        default: 0
    },
    down:  {
        type: Number,
        default: 0
    },
    visits:  {
        type: Number,
        default: 0
    },
    postedOnFacebook: {
        type: Boolean,
        default: false
    },
    postedOnInstagramStory: {
        type: Boolean,
        default: false
    },
    urlFacebook: {
        type: String
    },
    comments: [{
        type : mongoose.Schema.ObjectId,
        ref: 'Comment'
    }],
    hashtags: [{
        type : mongoose.Schema.ObjectId,
        ref: 'Hashtag'
    }]
});
    
    newSchema.plugin(mongoosePaginate);

// the schema is useless so far
// we need to create a model using it
var New = mongoose.model('New', newSchema );

// make this available to our Node applications
module.exports = New;
// grab the things we need
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var mongoosePaginate = require('mongoose-paginate');

    var categorySchema = new Schema({
        color:  {
            type: String
        },
        name:  {
            type: String
        },
        icon:  {
            type: String
        }
    });

        categorySchema.plugin(mongoosePaginate);
    // the schema is useless so far
    // we need to create a model using it
    var category = mongoose.model('Category', categorySchema );

    // make this available to our Node applications
    module.exports = category;
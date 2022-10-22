const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const { Schema } = mongoose

const universitie = new Schema({
  domains: [String], 
  country: String,
  state_province: String,
  web_pages: [String],
  name: String,
  alpha_two_code: String,
  fromApi: {type:Boolean,default:true}
});

universitie.plugin(mongoosePaginate)

module.exports = mongoose.model('Universities', universitie)

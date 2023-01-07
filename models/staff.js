const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    name: { type: String, require: true, trim: true }, 
    salary: { type: Number },
    created: { type: Date, default: Date.now },
    photo: { type: String, default: 'nopic.png' }
  }, { collection: "staffs"});

const staff = mongoose.model("Staff", staffSchema)

module.exports = staff
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    name: { type: String, require: true, trim: true }, 
    photo: { type: String, default: 'nopic.png' },
    location:{
        lat: Number,
        lgn: Number
    },
    //createdAt: { type: Date, default: Date.now},  (auto fills by timestamps: true in line 14)
    //updatedAt: { type: Date, default: Date.now}   (auto fills by timestamps: true in line 14)
  }, { 
    timestamps: true, 
    collection: "shops"
});

const shop = mongoose.model("Shop", staffSchema)

module.exports = shop
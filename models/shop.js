const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name: { type: String, require: true, trim: true }, 
    photo: { type: String, default: 'nopic.png' },
    location:{
        lat: Number,
        lgn: Number
    },
    //createdAt: { type: Date, default: Date.now},  (auto fills by timestamps: true in line 14)
    //updatedAt: { type: Date, default: Date.now}   (auto fills by timestamps: true in line 14)
  }, { 
    toJSON: {virtuals: true},
    timestamps: true, 
    collection: "shops"
});

shopSchema.virtual('menus', {
  ref: 'Menu', 
  localField: '_id', 
  foreignField: 'shop'
});

const shop = mongoose.model("Shop", shopSchema)

module.exports = shop
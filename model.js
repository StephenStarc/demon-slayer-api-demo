const mongoose = require('mongoose')

const DemonSlayerAPISchema = new mongoose.Schema({
    name: {type:String, required:true},
    id: { type: String, required: true },
    race: { type: String, required: true },
    affiliation: { type: String, required: true },
    skill: { type: String, required: true },
    quote: { type: String, required: true },
    info:{ type: String, required: true },
    gender:{ type: String, required: true },
    height:{ type: String, required: true },
    weight:{ type: String, required: true },
    birthday:{ type: String, required: true },
    thumbnail:{ type: String, required: true },
    image:{ type: String, required: true },
})

const Character = new mongoose.model('Character', DemonSlayerAPISchema)

module.exports = Character


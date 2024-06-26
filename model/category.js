const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim: true,
        unique: true

    },
    desc: {
        type: String,
        required:true,
        trim: true,

    },
    isActive: {
        type: Boolean,
        default: true

    }
},{
    collection: "category",
    timestamps: true
})


module.exports = mongoose.model("Category", CategorySchema)
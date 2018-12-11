const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CropSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    fufilled: {
        type: Boolean,
        default: false
    },
    date_created: {
        type: Date,
        required: true,
        default: new Date()
    },
    profile_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }]
})

const Crop = mongoose.model('Crop', CropSchema);
module.exports = Crop;

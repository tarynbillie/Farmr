const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WantSchema = new Schema ({
    name: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    units: {
        type: String,
        required: false
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
});

const Want = mongoose.model('Want', WantSchema);
module.exports = Want;
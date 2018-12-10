const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WantSchema = new Schema ({
    leaf: {
        type: String,
        required: false
    },
    root: {
        type: String,
        required: false
    },
    legume: {
        type: String,
        required: false
    },
    night: {
        type: String,
        required: false,
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
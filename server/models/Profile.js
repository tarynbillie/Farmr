const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true,
        default: new Date()
    },
    wants: [{
        type: Schema.Types.ObjectId,
        ref: 'Want'
    }]

})

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
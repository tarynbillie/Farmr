const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CropSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // quantity: {
    //     type: Number,
    //     required: true
    // },
    date_available: {
        type: String,
        required: true
    },
    profile_id: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    date_created: {
        type: Date,
        required: true,
        default: new Date()
    }
})

const Crop = mongoose.model('Crop', CropSchema);
module.exports = Crop;


        // broccoli: {
        //     type: String,
        //     // per head 
        //     price: 3.50,
        //     required: false
        // },
        // cabbage: {
        //     type: String,
        //     // per head
        //     price: 4.00,
        //     required: false
        // },
        // chard: {
        //     type: String,
        //     // per bunch
        //     price: 3.00,
        //     required: false
        // },
        // fennel: {
        //     type: String,
        //     // each
        //     price: 3.00,
        //     required: false
        // },
        // bokchoy: {
        //     type: String,
        //     // each
        //     price: 3.00,
        //     required: false
        // },
        // spinach: {
        //     type: String,
        //     // lb
        //     price: 12.00,
        //     required: false
        // },
        // kohlrabi: {
        //     type: String,
        //     // per plant
        //     price: 2.00,
        //     required: false
        // },
        // onion: {
        //     type: String,
        //     // each
        //     price: 0.75,
        //     required: false
        // },
        // radish: {
        //     type: String,
        //     // bunch
        //     price: 2.50,
        //     required: false
        // },
        // tomato: {
        //     type: String,
        //     // lb
        //     price: 6.00,
        //     required: false
        // },
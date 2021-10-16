const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
});

const friendModel = mongoose.model('friends', friendSchema);
module.exports = friendModel;
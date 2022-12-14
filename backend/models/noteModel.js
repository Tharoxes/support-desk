const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    ticket: {
        type: String,
        required: [true],
        ref: 'Ticket'
    },
    text: {
        type: String,
        required: [true, 'Please addd some text'],
    },
    isStaff: {
        type: Boolean,
        default: false,
    },
    staffID: {
        type: String,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Note', noteSchema)
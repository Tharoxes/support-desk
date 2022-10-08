const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    product: {
        type: String,
        unique: true,
        required: [true, 'Please select a product'],
        enum: ['iPhone' , 'Android', 'Google Phone'],
    },
    description: {
        type: String,
        required: [true, 'Please describe your Problem'],
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new',
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Ticker', ticketSchema)
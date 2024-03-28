import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    image: {
        type: {
            url: String
        },
        default: null
    },
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('Post', postSchema);
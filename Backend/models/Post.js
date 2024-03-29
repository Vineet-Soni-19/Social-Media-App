import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: null
    },
    caption: {
        type: String,
        required: true
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



const postModel = mongoose.model("postModel", postSchema);

export default postModel;
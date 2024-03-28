import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema(
    {
    username:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    fullname:{
        type: String,
        required: true,
        max: 20
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    profilePicture:{
        type: String,
        default: ""
    },
    bio:{
        type: String,
    },
    posts:{
        type: Array,
        required: true,
        default: []
    },
    followers:{
        type: Array,
        required: true,
        default: []
    },
    following: {
        type: Array,
        required: true,
        default: []
    },
},
    {timestamps:true}
)

const userModel = mongoose.model("userModel", UserSchema);

export default userModel;
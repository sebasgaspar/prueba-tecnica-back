import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    access_token: {
        type: String,
        required: false
    },
    gitUser:{
        type: String,
        required: false
    }
})

export default model('User', userSchema);
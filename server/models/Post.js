import { Schema, models, model } from 'mongoose'

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true })

export default models.Post || model('Post', postSchema)

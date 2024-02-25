import mongoose from "mongoose";

// Schema
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        pages: {
            type: Number,
            required: true,
        }

    }
)

export const Book = mongoose.model('Book', bookSchema);
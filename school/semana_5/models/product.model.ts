import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const productSchema = new Schema({
    id: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    price: { 
        type: Number
    },
    quantity: {
        type: Number
    },
    producer: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const Product = mongoose.model('Product', productSchema)
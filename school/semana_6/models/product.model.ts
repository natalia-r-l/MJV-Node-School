import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface iProduct {
    id: string,
    description: string,
    img: string,
    price: number,
    quantity: number,
    producer: string,
    createdAt: string | Date
}

export const productSchema = new Schema<iProduct> ({
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

export const Product = mongoose.model<iProduct>('Product', productSchema)
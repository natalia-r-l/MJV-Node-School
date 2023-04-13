import { Product } from "../../semana_5/models/product.model";
import ProductRepositoryScrypt from "../../semana_6/repositories/product.repository";
import { iProduct } from "../models/product.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class ProductRepositoryCryptService {
    getAll() {
        return ProductRepositoryScrypt.getAll();
    }

    getById(id: string) {
        return ProductRepositoryScrypt.getById(id);
    }

    async create(product: iProduct) {
        if(product.producer) {
            product.producer = await bcrypt.hash(product.producer, 10);
        }
        return ProductRepositoryScrypt.create(product);
    }

    async authorization(id: string, producer: string) {
        const product = await ProductRepositoryScrypt.getById(id);

        if (!product) throw new Error('Produto não encontrado');

        const result = await bcrypt.compare(producer, product.producer)
 
        if(result) {
            return jwt.sign({ id: product.id }, secretJWT, { expiresIn: '1h' });
        } 

        throw new Error('Procuder incorreto');
    }

    remove(id: string) {
       return ProductRepositoryScrypt.remove(id);
    }

    update(id: string, product: Partial<iProduct>) {
        return ProductRepositoryScrypt.update(id, product)
    }
}

export default new ProductRepositoryCryptService();
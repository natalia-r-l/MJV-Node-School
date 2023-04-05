import { Product } from "../models/product.model";
import ProductRepository from "../repositories/product.repository";

class ProductRepositoryService {
    getAll() {
        return ProductRepository.getAll();
    }

    getById(id: string) {
        return ProductRepository.getById(id);
    }

    create(product: typeof Product) {
        return ProductRepository.create(product);
    }

    remove(id: string) {
       return ProductRepository.remove(id);
    }

    update(id: string, product: Partial<typeof Product>) {
        return ProductRepository.update(id, product)
    }
}

export default new ProductRepositoryService();
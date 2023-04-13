import { Product, iProduct } from '../models/product.model';

class ProductRepositoryScrypt {
    getAll() {
        return Product.find();
    }

    getById(id: string) {
        return Product.findOne({ id: id});
    }

    create(product: iProduct) {
        return Product.create(product);
    }

    update(id: string, product: Partial<iProduct>) {
        return Product.updateOne({ id: id}, { $set: product})
    }

    remove(id: string) {
        return Product.deleteOne({ id: id })
    }
}

export default new ProductRepositoryScrypt();
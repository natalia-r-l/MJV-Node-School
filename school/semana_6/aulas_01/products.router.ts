
import { Request, Response, Router} from 'express';
import ProductRepositoryScryptService from '../services/products.service';
import { authorizantionMiddleware } from '../middlewares/authorization.middleware';

const productsRouter = Router();

productsRouter.get('/', authorizantionMiddleware, async (req: Request, res: Response) => {
    const products = await ProductRepositoryScryptService.getAll();
    res.send(products);
});

productsRouter.get('/:id', authorizantionMiddleware, async (req: Request, res: Response) => {
    const productIndex = await ProductRepositoryScryptService.getById(req.params.id)
    if(!productIndex) {
        return res.status(400).send({message: 'Produto não encontrado!'});
    }
    res.status(201).send(productIndex);
}) 

productsRouter.post('/', authorizantionMiddleware, async (req: Request, res: Response) => {
    if (req.body.price < 1000) {
        return res.status(400).send({ message: 'Preço abaixo de R$1000,00.' });
    }
    await ProductRepositoryScryptService.create(req.body)
    res.status(201).send({message: 'Produto criado com sucesso!'});
});

productsRouter.post('/authorization', async (req: Request, res: Response) => {
    try {
        const token = await ProductRepositoryScryptService.authorization(req.body.id, req.body.producer);
        res.status(200).send({ token })
    } catch(error: any) {
        res.status(401).send({ message: error.message })
    }
});

productsRouter.put('/:id', authorizantionMiddleware, async (req: Request, res: Response) => {
    try {
        await ProductRepositoryScryptService.update(req.params.id, req.body)
        res.status(200).send({message: 'Produto atualizado com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    } 
});

productsRouter.delete('/remove/:id', authorizantionMiddleware, async (req: Request, res: Response) => {
    try {
        await ProductRepositoryScryptService.remove(req.params.id);
        res.status(200).send({message: 'Produto removido com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }   
});

export default productsRouter;
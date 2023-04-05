
import { Request, Response, Router} from 'express';
import ProductRepositoryService from '../services/products.service';

const productsRouter = Router();

productsRouter.get('/', async (req: Request, res: Response) => {
    const products = await ProductRepositoryService.getAll();
    res.send(products);
});

productsRouter.get('/:id', async (req: Request, res: Response) => {
    const productIndex = await ProductRepositoryService.getById(req.params.id)
    if(!productIndex) {
        return res.status(400).send({message: 'Produto não encontrado!'});
    }
    res.status(201).send(productIndex);
})

/* Exercício 2) Crie um endpoint de POST para adicionar item no array do exercício 1. */ 

productsRouter.post('/', async (req: Request, res: Response) => {
    if (req.body.price < 1000) {
        return res.status(400).send({ message: 'Preço abaixo de R$1000,00.' });
    }
    await ProductRepositoryService.create(req.body)
    res.status(201).send({message: 'Produto criado com sucesso!'});
})

/*  Exercício 3) Crie um endpoint de PUT para atualizar um item no array do exercício 1. */

productsRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        await ProductRepositoryService.update(req.params.id, req.body)
        res.status(200).send({message: 'Produto atualizado com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }
   
    
})

/* Exercício 4) Crie um endpoint de DELETE para remover um item no array do exercício 1. */

productsRouter.delete('/remove/:id', async (req: Request, res: Response) => {
    try {
        await ProductRepositoryService.remove(req.params.id);
        res.status(200).send({message: 'Produto removido com sucesso!'});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }
    
});

export default productsRouter;
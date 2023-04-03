
import productsRouter from './products.router';
import { Request, Response, Router} from 'express';

const router = Router();

router.use('/products', productsRouter);

export default router;
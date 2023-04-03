import express from 'express';
import cors from 'cors';
import { Request, Response, Router} from 'express';

const hw = express();

hw.use(cors());
hw.use(express.json());

const primeiroExercicioRouter = Router();

primeiroExercicioRouter.get('/', (req: Request, res: Response) => {
    const helloworld = {message: 'Hello World'};
    res.send(helloworld);
})

hw.use(primeiroExercicioRouter);

const port = 3000;

hw.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
})
import express from 'express';
import cors from 'cors';
import { Request, Response, Router} from 'express';

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const helloworld = {message: 'Hello World'};
    res.send(helloworld);
})

app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
})
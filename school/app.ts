import express from 'express';
import cors from 'cors';
import { Request, Response, Router} from 'express';
import routes from '../school/semana_3/aulas_02_e_03';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const router = Router();

/* router.get('/', (req: Request, res: Response) => {
    const helloworld = {message: 'Hello World'};
    res.send(helloworld);
})

app.use(router);
 */
const port = 3000;

app.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
})
import express from 'express';
import cors from 'cors';
import { Router } from 'express';
import routes from '../school/semana_6/aulas_01/index';
import connection from '../school/semana_5/config/database';

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

connection.then(() => {
    console.log("banco de dados conectado!")
    app.listen(port, () => {
        console.log('Aplicação online na porta: ', port);
    })
}).catch((error) => console.log(error));


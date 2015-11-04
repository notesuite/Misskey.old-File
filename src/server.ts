import * as express from 'express';
import * as multer from 'multer';
import * as bodyParser from 'body-parser';
import config from './config';

const app: express.Express = express();
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

app.all('*', (req: express.Request, res: express.Response, next: () => void) => {
	console.log('kyoppie');
	next();
});
app.post('/register', (req: express.Request, res: express.Response) => {
	require('./api/register')(req, res);
});
app.put('/rename', (req: express.Request, res: express.Response) => {
	require('./api/rename')(req, res);
});
app.delete('/delete', (req: express.Request, res: express.Response) => {
	require('./api/delete')(req, res);
});

app.listen(config.port.internal);
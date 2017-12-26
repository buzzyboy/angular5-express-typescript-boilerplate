import * as express from 'express';
import 'reflect-metadata';
import {useExpressServer} from "routing-controllers";
import * as bodyParser from "body-parser";
import config from './config/config';
const path = require('path');

console.log(config);

const app: express.Express = express();

app.use(bodyParser.json());

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [__dirname + '/controllers/*.ts']
});

app.use(express.static(path.join(__dirname, '../dist-site')));

app.get('/*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist-site/index.html'));
});

const port = process.env.PORT || 3036;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
